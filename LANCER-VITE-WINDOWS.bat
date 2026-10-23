@echo off
cd /d "%~dp0"
echo LN-IA - S10 Atelier pratique Fiche projet V1
if not exist node_modules (
  call npm.cmd install
  if errorlevel 1 (
    echo Echec de l'installation. Ouvrir APERCU-AUTONOME-SEANCE-10.html.
    pause
    exit /b 1
  )
)
call npm.cmd run dev
pause
