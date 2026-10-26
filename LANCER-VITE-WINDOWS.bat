@echo off
setlocal
cd /d "%~dp0"
echo LN-IA - S10 Atelier pratique Fiche projet V1
where node.exe >nul 2>&1
if errorlevel 1 (
  echo Node.js est introuvable. Installer Node.js puis relancer ce fichier.
  pause
  exit /b 1
)
where npm.cmd >nul 2>&1
if errorlevel 1 (
  echo npm est introuvable. Verifier l'installation de Node.js.
  pause
  exit /b 1
)
if not exist node_modules\vite\bin\vite.js (
  call npm.cmd install
  if errorlevel 1 (
    echo Echec de l'installation. Ouvrir APERCU-AUTONOME-SEANCE-10.html.
    pause
    exit /b 1
  )
)
echo Le navigateur va s'ouvrir sur http://127.0.0.1:5173/
echo Garder cette fenetre ouverte. Pour arreter : Ctrl+C.
call npm.cmd run dev -- --open --strictPort
if errorlevel 1 (
  echo Demarrage impossible. Consulter l'erreur ci-dessus, notamment le port 5173.
  pause
  exit /b 1
)
endlocal
