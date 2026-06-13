# Phase 0 completion script
# Run this AFTER signing in to GitHub and Vercel (see DEPLOY.md).

$ErrorActionPreference = "Stop"
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
Set-Location $PSScriptRoot\..

Write-Host "=== Phase 0: GitHub + Vercel ===" -ForegroundColor Cyan

# 1. GitHub
gh auth status *> $null
if ($LASTEXITCODE -ne 0) {
    Write-Host "GitHub: not logged in. Run: gh auth login -h github.com -p https -w" -ForegroundColor Yellow
} else {
    $ghUser = gh api user -q .login
    Write-Host "GitHub: logged in as $ghUser" -ForegroundColor Green
    gh repo view "$ghUser/clothing-shop" *> $null
    if ($LASTEXITCODE -ne 0) {
        gh repo create clothing-shop --public --source=. --remote=origin --push
        Write-Host "GitHub repo created and pushed." -ForegroundColor Green
    } else {
        if (-not (git remote get-url origin 2>$null)) {
            git remote add origin "https://github.com/$ghUser/clothing-shop.git"
        }
        git push -u origin main
        Write-Host "GitHub repo synced." -ForegroundColor Green
    }
}

# 2. Vercel
vercel whoami *> $null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Vercel: not logged in. Run: vercel login" -ForegroundColor Yellow
    exit 1
}

$vercelUser = vercel whoami
Write-Host "Vercel: logged in as $vercelUser" -ForegroundColor Green
vercel --prod --yes
Write-Host ""
Write-Host "Deploy complete. Add your GoDaddy domain in Vercel -> Settings -> Domains." -ForegroundColor Cyan
