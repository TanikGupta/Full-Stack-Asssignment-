@echo off
setlocal
echo ========================================================
echo   Pushing Portfolio to GitHub (Tanik Gupta)
echo ========================================================
echo.

set /p REPO_URL="Enter your GitHub Repository URL (e.g. https://github.com/TanikGupta/full-stack-mern-portfolio.git): "

if "%REPO_URL%"=="" (
    echo [ERROR] No URL provided. Exiting.
    pause
    exit /b
)

echo.
echo Setting remote origin to %REPO_URL% ...
git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo Renaming branch to main ...
git branch -M main

echo Pushing code to GitHub ...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo   [SUCCESS] Code pushed successfully to GitHub!
    echo ========================================================
) else (
    echo.
    echo [NOTICE] If Git prompted for login, complete the browser login.
    echo If using credentials, use your GitHub Username and Personal Access Token (PAT).
)

echo.
pause
