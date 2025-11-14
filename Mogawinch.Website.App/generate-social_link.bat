@echo off
setlocal

set "JSON_DIR=wwwroot\content\reviews/games"
set "OUTPUT_DIR=wwwroot\content\social_media_link"

if not exist "%OUTPUT_DIR%" mkdir "%OUTPUT_DIR%"

echo Generating social media HTML links...

for %%F in ("%JSON_DIR%\*.json") do (
    powershell -NoProfile -ExecutionPolicy Bypass -Command ^
    "$j = Get-Content -Raw '%%~fF' | ConvertFrom-Json; $title=$j.Title; $img=$j.ImagePath; if(!$title){exit};" ^
    "$jsonFileName = [System.IO.Path]::GetFileName('%%~fF');" ^
    "$htmlFileName = [System.IO.Path]::ChangeExtension($jsonFileName, '.html');" ^
    "$out='%OUTPUT_DIR%\'+$htmlFileName;" ^
    "if(Test-Path $out){Write-Host 'Exists:' $out; exit};" ^
    "$relativePath = 'content/reviews/games/'+$jsonFileName;" ^
    "$path64 = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($relativePath));" ^
    "$htmlTemplateBase64 = 'PGh0bWw+CjxoZWFkPgogICAgPG1ldGEgcHJvcGVydHk9Im9nOnRpdGxlIiBjb250ZW50PSJ7MH0iIC8+CiAgICA8bWV0YSBwcm9wZXJ0eT0ib2c6dHlwZSIgY29udGVudD0iYXJ0aWNsZSIgLz4KICAgIDxtZXRhIHByb3BlcnR5PSJvZzppbWFnZSIgY29udGVudD0iaHR0cHM6Ly9tb2dhd2luY2guY29tL3sxfSIgLz4KICAgIDxtZXRhIHByb3BlcnR5PSJvZzp1cmwiIGNvbnRlbnQ9Imh0dHBzOi8vbW9nYXdpbmNoLmNvbS9yZXZpZXdzL2dhbWVzL3syfSIgLz4KICAgIDxtZXRhIHByb3BlcnR5PSJvZzpzaXRlX25hbWUiIGNvbnRlbnQ9Ik1vZ2F3aW5jaCBIUSIgLz4KPC9oZWFkPgo8c2NyaXB0PgogICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICdodHRwczovL21vZ2F3aW5jaC5jb20vcmV2aWV3cy9nYW1lcy97Mn0nOwo8L3NjcmlwdD4KPC9odG1sPg==';" ^
    "$html = [System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($htmlTemplateBase64));" ^
    "$html = $html -f $title, $img, $path64;" ^
    "$html | Out-File -Encoding UTF8 $out;" ^
    "Write-Host 'Created:' $out"
)

echo Done.
endlocal
