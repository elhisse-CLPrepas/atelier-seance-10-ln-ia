# Remplacement de l’affiche S09 — 26 octobre 2026

## Demande et source
L’utilisateur demande le remplacement de l’affiche de la diapositive 4, puis le
versionnement et le déploiement GitHub Pages.
Source fournie : Affiches/AFFICHE-seance-09-note de cadrage.jpeg.
Copie publique identique : public/assets/affiche-note-cadrage-s09-six-elements.jpeg.
Le visuel a été inspecté : sujet, public concerné, besoin ou problème,
objectif du document, résultat attendu, première action.
Ces six éléments correspondent au modèle de note de cadrage S09.

## Changements
La diapositive 4 et la galerie partagent la nouvelle référence S09.
Le texte alternatif et la légende énumèrent les six éléments.
Un nouveau nom de fichier évite la réutilisation de l’ancienne URL d’image.
L’ancienne affiche reste conservée dans Affiches/ et public/assets/ pour l’historique.
La génération autonome prend en charge le type MIME image/jpeg et embarque
le nouveau visuel. Aucune source historique n’a été modifiée.
Les corrections antérieures du README et du lanceur local ont été versionnées
dans un commit séparé avant ce remplacement.

## Contrôles réalisés
- npm run verify : 11 tests, build Vite et aperçu autonome réussis.
- Test existant : égalité binaire entre original JPEG et copie publique.
- Chrome headless : aperçu autonome puis build production via Vite preview.
- Desktop 1440 px et mobile 390 px : slide 4, image chargée, agrandissement,
  absence de débordement horizontal et captures inspectées visuellement.
- Régression : quatre affiches, slide 21 S11, Échap, navigation clavier,
  ressources, déclenchement des exports V1 et portfolio, rendu des dix questions du quiz.
- Captures : verification-s09-slide-1440.png et verification-s09-slide-390.png.
- Script : node scripts/verify-browser-s11.mjs [URL facultative].

## Publication et réserves
Le push sur main déclenche le workflow Pages. Son résultat effectif est à lire
dans les Actions GitHub ; ce rapport ne présume pas de son succès.
L’utilisateur autorise explicitement ce déploiement dans sa demande.
Cette publication technique ne valide pas automatiquement les productions
pédagogiques : elles demeurent À RELIRE / À VALIDER par un humain.
