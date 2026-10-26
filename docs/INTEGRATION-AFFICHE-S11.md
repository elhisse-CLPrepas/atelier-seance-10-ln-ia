# Intégration de l’affiche S11 — 26 octobre 2026

Statut éditorial : À RELIRE / À VALIDER par un humain.

## Source et insertion
Original préservé : Affiches/Plan du Guide Pratique — Séance 11.png.
Copie identique : public/assets/affiche-plan-guide-s11.png (égalité binaire testée).
L’affiche annonce vendredi 30 octobre 2026, 19H00 GMT, Module 03, semaine 06.
La source S09 et la progression S09 → S10 → S11 → S12 restent inchangées.

- Accueil : quatrième affiche, galerie à deux colonnes sur desktop et une sur mobile.
- Présentation : diapositive 21 « Préparer S11 », sans changer les 22 diapositives.
- Ressources : remplacement de l’ancienne vignette S11, agrandissement et horaire.
- Aperçu autonome : image embarquée, utilisable hors connexion.

## Vérifications réalisées
npm run verify : 11 tests réussis, build Vite et génération autonome réussis.
Chrome headless : affichage 1440 et 390 px, quatre affiches, chargement S11,
dialogue et fermeture Échap, slide 21 et flèche droite, ressources sans
débordement horizontal, déclenchement des exports V1 et portfolio, rendu des
10 questions du quiz. Les tests existants contrôlent le contenu des exports.
Captures desktop/mobile de la diapositive 21 inspectées visuellement :
verification-s11-slide-1440.png et verification-s11-slide-390.png.
Script reproductible : node scripts/verify-browser-s11.mjs
(nécessite Chrome Windows au chemin indiqué et le port local 9337 disponible).
Ce contrôle porte sur l’aperçu autonome ; le build production a été compilé.
Le quiz a été contrôlé au rendu, sans parcours manuel complet de ses réponses.

## Versionnement
Branche dédiée : feat/affiche-s11.
Dépôt : https://github.com/elhisse-CLPrepas/atelier-seance-10-ln-ia
Le commit regroupe original, copie publique, code, test adapté, aperçu autonome
et preuves. Le hash du commit est consultable dans Git ; il n’est pas inventé ici.
Le push de cette branche ne déclenche pas le workflow Pages réservé à main.
La fusion vers main et la publication attendent la décision humaine.
Aucun push forcé, aucune modification des sources historiques.

## Réserves
L’intégration technique ne constitue pas une validation pédagogique.
L’horaire est repris tel quel de l’affiche fournie, sans conversion locale.
