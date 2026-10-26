# LN-IA — Séance 10 | Atelier pratique : de la note de cadrage à la fiche projet V1

**Cycle :** Challenge 100 Jours — Relance Automne 2026  
**Identifiant du cycle :** `challenge-100jours-automne-2026`  
**Atelier de référence :** Séance 10 — lundi 26 octobre 2026 · Module 03 · Semaine 05  
**Décision éditoriale :** À RELIRE / À VALIDER par un humain

**Challenge 100 Jours — Relance Automne 2026** · **Module 03 — Documents professionnels** · **Semaine 05**  
**Séance 10 : lundi 26 octobre 2026** · Pilote : **Prof. Abderrahman EL HISSE**  
**Statut : V1 — À RELIRE / À VALIDER**

## Démarrer immédiatement

Double-cliquer sur `APERCU-AUTONOME-SEANCE-10.html`. La présentation et les activités sont autonomes et fonctionnent hors ligne dans un navigateur récent. Les liens vers les références externes nécessitent Internet.

## Lancer le serveur local depuis ce README

1. Ouvrir le dossier du projet dans VS Code, puis **Terminal → Nouveau terminal**.
2. Copier et exécuter cette commande PowerShell :

```powershell
.\LANCER-VITE-WINDOWS.bat
```

Le lanceur installe les dépendances si nécessaire, démarre Vite et ouvre automatiquement le navigateur. Depuis l’Explorateur Windows, vous pouvez aussi double-cliquer sur [LANCER-VITE-WINDOWS.bat](LANCER-VITE-WINDOWS.bat). Un aperçu Markdown ou GitHub peut afficher ou télécharger ce fichier plutôt que l’exécuter : utilisez alors la commande ci-dessus dans votre copie locale.

**Une fois le serveur démarré : [ouvrir l’atelier local](http://127.0.0.1:5173/).**

Gardez le terminal du serveur ouvert pendant l’atelier. Pour arrêter : **Ctrl+C**. Après fermeture ou redémarrage de Windows, relancez le fichier BAT avant d’ouvrir l’adresse.

### Si ERR_CONNECTION_REFUSED apparaît

L’adresse locale répond uniquement quand Vite est démarré sur cet ordinateur. Relancez le fichier BAT et vérifiez le message `Local: http://127.0.0.1:5173/`. Si le port 5173 est occupé, le lanceur affiche une erreur au lieu de choisir silencieusement une autre adresse : vérifiez le programme qui utilise ce port. Node.js et npm doivent être installés ; le lanceur signale leur absence. L’installation initiale des dépendances nécessite Internet.

Pour démarrer manuellement depuis la racine du projet :

```powershell
npm.cmd install
npm.cmd run dev -- --open --strictPort
```

Sans serveur, [ouvrir l’aperçu autonome](APERCU-AUTONOME-SEANCE-10.html) depuis l’Explorateur Windows. Le [site publié](https://elhisse-clprepas.github.io/atelier-seance-10-ln-ia/) est également accessible.

Contrôles :

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run standalone
```

## Onze rubriques interactives

| Rubrique | Action |
|---|---|
| Accueil | Déroulement et progression S09 → S10 → S11 → S12 |
| Présentation | 22 diapositives, notes formateur, navigation clavier, plein écran et impression |
| Méthode | 12 rubriques d'une fiche projet, 8 étapes LN-IA |
| Démonstrations | Quatre cas fictifs : humain/IA, scolaire, entreprise, management |
| Atelier pratique | Import note S09 (.md/.txt), cinq questions, saisie, aperçu Markdown, exports V1/V2 |
| Prompts | Cinq consignes copiables, dont la production depuis la note S09 |
| Flashcards | Douze cartes recto-verso |
| Quiz | Dix questions, correction expliquée, export autoévaluation |
| Validation | Dix critères de relecture humaine, export grille |
| Portfolio | Journal de progression et preuve exportable |
| Ressources | Références, sources historiques, préparation S11 |

## Livrables attendus

```text
mon-challenge-100-jours/
├── 02-prompts/
│   └── prompt-fiche-projet-s10.md
├── 03-documents/
│   ├── note-cadrage-courte.md         # produit en S09
│   ├── fiche-projet-v1.md             # produit en S10
│   ├── grille-relecture-s10.md       # trace contrôle
│   └── fiche-projet-v2-a-relire.md    # facultatif, après corrections humaines
└── 07-portfolio/
    └── preuve-seance-10.md
```

Le navigateur télécharge dans le dossier standard de téléchargements. Aucun dossier local externe n'est automatiquement modifié. Les données du formulaire restent dans le navigateur (`localStorage`), sans transmission serveur. Exportez avant de changer d'appareil, de profil ou de navigateur. N'utilisez pas de données confidentielles dans la démonstration.

**Important :** ce site ne communique avec aucun modèle IA. Les quatre cas sont fictifs. Ni le quiz ni la checklist ne donnent une validation documentaire automatique. Les sorties restent « À RELIRE / À VALIDER » jusqu'à décision humaine explicite. La V2 exige des notes de correction mais le logiciel ne certifie pas leur réalité.

## Provenance et points de cohérence

- `sources-originales/supports-seance-10-HISTORIQUE.zip` : pièce reçue, inchangée.
- `ressources-selectionnees/` : copies Markdown adaptées au cycle `challenge-100jours-automne-2026`, séance 10 du lundi 26 octobre 2026 ; provenance historique indiquée et exemples fictifs signalés. Les originaux restent dans le ZIP.
- `docs/ANALYSE-SOURCES.md` : distinctions chronologiques et terminologiques.
- Les ressources originales datent de **juillet 2026** pour une formation antérieure ; l'application actuelle est adaptée à la relance **Automne 2026**.
- Le dépôt de référence S09 est [atelier-seance-09-ln-ia](https://github.com/elhisse-CLPrepas/atelier-seance-09-ln-ia).
- La sortie **S10** attendue est bien une **fiche projet V1**, et non un guide complet.

## GitHub Pages

Le dépôt de l'atelier est [atelier-seance-10-ln-ia](https://github.com/elhisse-CLPrepas/atelier-seance-10-ln-ia). Le workflow GitHub Pages vérifie et construit `main`, puis publie `dist/`. Consulter les [exécutions de déploiement](https://github.com/elhisse-CLPrepas/atelier-seance-10-ln-ia/actions) pour connaître le résultat effectif. Adresse du site : [atelier S10](https://elhisse-clprepas.github.io/atelier-seance-10-ln-ia/). Voir `docs/DEPLOIEMENT-GITHUB.md`.

## Pour le formateur

Les quatre affiches fournies dans `Affiches/` sont intégrées à l'accueil (affiche S10 et galerie) et aux diapositives 1 (S10), 2 (Module 03) 4 (rappel S09) et 21 (préparation S11). Le bouton d'agrandissement ouvre une fenêtre refermable avec « Fermer » ou Échap. Les originaux PNG sont copiés sans modification dans `public/assets/` et embarqués dans l'aperçu autonome. L'affiche S09 est une synthèse visuelle ; le formulaire conserve les six rubriques de cadrage, dont l'objectif.

Audit local et réserves avant diffusion : [docs/AUDIT-2026-10-23.md](docs/AUDIT-2026-10-23.md). La chaîne `npm.cmd run verify` passe ; le contrôle navigateur des correctifs reste à réaliser. Les cases de relecture sont remises à zéro quand le projet change et ne sont pas conservées après rechargement : exporter la grille avant de quitter.

Voir `docs/DEROULEMENT-FORMATEUR.md`, `docs/SYNOPSIS-22-SLIDES.md`, `docs/CONTROLES-QUALITE.md`.
