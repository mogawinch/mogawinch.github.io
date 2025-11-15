# generate-links.ps1
# Requires PowerShell 7+ (pwsh)

# Set base directories
$BaseDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$JsonDir = Join-Path $BaseDir "wwwroot/content/reviews/games"
$OutputDir = Join-Path $BaseDir "wwwroot/content/links"

# Ensure output directory exists
if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir | Out-Null
}

Write-Host "Generating social media HTML links..."

# Loop over JSON files
Get-ChildItem -Path $JsonDir -Filter "*.json" | ForEach-Object {
    $jsonFile = $_.FullName
    $j = Get-Content -Raw $jsonFile | ConvertFrom-Json

    $title = $j.Title
    $img = $j.ImagePath
    $excerpt = $j.Excerpt

    if (-not $title) { 
        Write-Warning "Skipping file with no title: $jsonFile"
        return
    }

    $jsonFileName = $_.Name
    $htmlFileName = [System.IO.Path]::ChangeExtension($jsonFileName, ".html")
    $out = Join-Path $OutputDir $htmlFileName

    if (Test-Path $out) {
        Write-Host "Exists: $out"
        return
    }

    $relativePath = "content/reviews/games/$jsonFileName"
    $path64 = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($relativePath))

    # Base64 HTML template
    $htmlTemplateBase64 = 'PGh0bWw+CjxoZWFkPgogICAgPG1ldGEgcHJvcGVydHk9Im9nOnRpdGxlIiBjb250ZW50PSJ7MH0iIC8+CgkgICAgPG1ldGEgcHJvcGVydHk9Im9nOmRlc2NyaXB0aW9uIiBjb250ZW50PSJ7M30iIC8+CiAgICA8bWV0YSBwcm9wZXJ0eT0ib2c6dHlwZSIgY29udGVudD0iYXJ0aWNsZSIgLz4KICAgIDxtZXRhIHByb3BlcnR5PSJvZzppbWFnZSIgY29udGVudD0iaHR0cHM6Ly9tb2dhd2luY2guY29tL3sxfSIgLz4KICAgIDxtZXRhIHByb3BlcnR5PSJvZzp1cmwiIGNvbnRlbnQ9Imh0dHBzOi8vbW9nYXdpbmNoLmNvbS9yZXZpZXdzL2dhbWVzL3syfSIgLz4KICAgIDxtZXRhIHByb3BlcnR5PSJvZzpzaXRlX25hbWUiIGNvbnRlbnQ9Ik1vZ2F3aW5jaCBIUSIgLz4KPC9oZWFkPgo8c2NyaXB0PgogICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICdodHRwczovL21vZ2F3aW5jaC5jb20vcmV2aWV3cy9nYW1lcy97Mn0nOwo8L3NjcmlwdD4KPC9odG1sPg=='

    $html = [System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($htmlTemplateBase64))
    # Substitute placeholders {0}, {1}, {2}, {3}
    $html = $html -f $title, $img, $path64, $excerpt

    # Save to output
    $html | Out-File -Encoding UTF8 $out
    Write-Host "Created: $out"
}

Write-Host "Done."