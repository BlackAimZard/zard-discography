@echo off
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
    echo Node.js was not found.
    pause
    exit /b 1
)

node "build_single.js"

if errorlevel 1 (
    echo.
    echo Build failed.
    pause
    exit /b 1
)

start "" "single.html"