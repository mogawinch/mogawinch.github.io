# generate-links.ps1
# Requires PowerShell 7+

# -----------------------------------------------------
# Directories
# -----------------------------------------------------

$BaseDir   = Split-Path -Parent $MyInvocation.MyCommand.Path
$JsonDir   = Join-Path $BaseDir "wwwroot/content/reviews/games"
$OutputDir = Join-Path $BaseDir "wwwroot/content/links"
$Sitemap   = Join-Path $BaseDir "wwwroot/sitemap.xml"

if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir | Out-Null
}

Write-Host "Generating social media HTML links..."
$generatedLinks = @()   # We'll collect objects: @{Url=...; LastMod=...}

# -----------------------------------------------------
# Loop through JSON files
# -----------------------------------------------------

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

    if (-not (Test-Path $out)) {
        $relativePath = "content/reviews/games/$jsonFileName"
        $path64 = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($relativePath))

        # Base64 template from your original batch script
        $htmlTemplateBase64 = 'PGh0bWw+CjxoZWFkPgogICAgPG1ldGEgcHJvcGVydHk9Im9nOnRpdGxlIiBjb250ZW50PSJ7MH0iIC8+CgkgICAgPG1ldGEgcHJvcGVydHk9Im9nOmRlc2NyaXB0aW9uIiBjb250ZW50PSJ7M30iIC8+CiAgICA8bWV0YSBwcm9wZXJ0eT0ib2c6dHlwZSIgY29udGVudD0iYXJ0aWNsZSIgLz4KICAgIDxtZXRhIHByb3BlcnR5PSJvZzppbWFnZSIgY29udGVudD0iaHR0cHM6Ly9tb2dhd2luY2guY29tL3sxfSIgLz4KICAgIDxtZXRhIHByb3BlcnR5PSJvZzp1cmwiIGNvbnRlbnQ9Imh0dHBzOi8vbW9nYXdpbmNoLmNvbS9yZXZpZXdzL2dhbWVzL3syfSIgLz4KICAgIDxtZXRhIHByb3BlcnR5PSJvZzpzaXRlX25hbWUiIGNvbnRlbnQ9Ik1vZ2F3aW5jaCBIUSIgLz4KPC9oZWFkPgo8c2NyaXB0PgogICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICdodHRwczovL21vZ2F3aW5jaC5jb20vcmV2aWV3cy9nYW1lcy97Mn0nOwo8L3NjcmlwdD4KPC9odG1sPg=='
        $html = [System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($htmlTemplateBase64))
        $html = $html -f $title, $img, $path64, $excerpt

        $html | Out-File -Encoding UTF8 $out
        Write-Host "Created: $out"
    } else {
        Write-Host "Exists: $out"
    }

    # Add link and lastmod to sitemap array
    $lastMod = (Get-Item $jsonFile).LastWriteTimeUtc.ToString("yyyy-MM-dd")
    $generatedLinks += [PSCustomObject]@{
        Url     = "/content/links/$htmlFileName"
        LastMod = $lastMod
    }
}

# -----------------------------------------------------
# Generate sitemap.xml
# -----------------------------------------------------

Write-Host "Generating sitemap.xml..."

$sitemapXml = @()
$sitemapXml += '<?xml version="1.0" encoding="UTF-8"?>'
$sitemapXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

foreach ($entry in $generatedLinks) {
    $sitemapXml += "  <url>"
    $sitemapXml += "    <loc>https://mogawinch.com$($entry.Url)</loc>"
    $sitemapXml += "    <lastmod>$($entry.LastMod)</lastmod>"
    $sitemapXml += "    <changefreq>monthly</changefreq>"
    $sitemapXml += "    <priority>0.5</priority>"
    $sitemapXml += "  </url>"
}

$sitemapXml += '</urlset>'

$sitemapXml -join "`n" | Out-File -Encoding UTF8 $Sitemap

Write-Host "Created sitemap: $Sitemap"
Write-Host "Done."
