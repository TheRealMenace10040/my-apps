# Renders scripts/icon.html to the PWA icons with headless Edge, then resizes.
# Run from the repo root while serving nothing: it loads the file directly.
$root = Split-Path $PSScriptRoot -Parent
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$icons = Join-Path $root "public\icons"
$big = Join-Path $icons "icon-512.png"
$src = "file:///" + ((Join-Path $PSScriptRoot "icon.html") -replace '\\', '/')

& $edge --headless=new --disable-gpu --hide-scrollbars --window-size=512,512 --screenshot="$big" $src 2>$null
Start-Sleep 2

Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile($big)
foreach ($pair in @(@(192, "icon-192.png"), @(180, "apple-touch-icon.png"))) {
  $bmp = New-Object System.Drawing.Bitmap $pair[0], $pair[0]
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.DrawImage($img, 0, 0, $pair[0], $pair[0])
  $bmp.Save((Join-Path $icons $pair[1]), [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $bmp.Dispose()
}
$img.Dispose()
