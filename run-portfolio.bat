@echo off
echo ========================================================
echo   Starting Tanik Gupta Full-Stack Portfolio Servers...
echo ========================================================
echo.
echo Starting Backend API on http://localhost:5000 ...
start "Portfolio Backend (Express)" cmd /k "cd server && npm start"

echo Starting Frontend App on http://localhost:5173 ...
start "Portfolio Frontend (React + Vite)" cmd /k "cd client && npm run dev"

echo.
echo ========================================================
echo   Both servers launched successfully!
echo   Frontend: http://localhost:5173/
echo   Backend:  http://localhost:5000/
echo ========================================================
echo.
pause
