# Déploiement GitHub Pages — Atelier S10

**Cycle :** Challenge 100 Jours — Relance Automne 2026  
**Identifiant du cycle :** `challenge-100jours-automne-2026`  
**Atelier de référence :** Séance 10 — lundi 26 octobre 2026 · Module 03 · Semaine 05  
**Décision éditoriale :** À RELIRE / À VALIDER par un humain

Dépôt cible : `https://github.com/elhisse-CLPrepas/atelier-seance-10-ln-ia` (constaté vide lors de l'inspection du 23/10/2026).

1. Extraire le ZIP localement puis ouvrir `atelier-seance-10-ln-ia` dans VS Code.
2. Tester `npm.cmd install`, `npm.cmd run check`, `npm.cmd run build`.
3. Vérifier les données du dépôt et sa branche `main`. Ne pas publier de données personnelles ni d'exemples présentés comme réels.
4. Exécuter `git init`, `git branch -M main`, `git remote add origin https://github.com/elhisse-CLPrepas/atelier-seance-10-ln-ia.git` si le répertoire n’est pas déjà un dépôt Git.
5. `git add .` puis `git commit -m "feat: atelier S10 fiche projet V1"` et `git push -u origin main` sous réserve de votre validation.
6. Dans GitHub : Settings → Pages → Build and deployment → Source : **GitHub Actions**.
7. Consulter l'onglet Actions ; ouvrir ensuite le site à l'URL Pages publiée par GitHub.
8. Tester la navigation, le logo, les images, les exercices, les téléchargements, le quiz et le mobile.

Le workflow `.github/workflows/deploy-pages.yml` installe les versions verrouillées avec `npm ci --no-audit --no-fund`, exécute les tests, le build et la génération autonome, puis publie `dist/`. Aucune clé secrète n'est requise dans les sources.

## Versionnement et publication demandés le 23 octobre 2026

L'utilisateur a explicitement demandé la création des commits, du remote, le push GitHub et GitHub Pages. Le dépôt distant a été vérifié vide avant l'initialisation locale. Le déploiement utilise `main` et la source Pages « GitHub Actions ». Les résultats effectifs sont consultables dans les [Actions du dépôt](https://github.com/elhisse-CLPrepas/atelier-seance-10-ln-ia/actions).

Site : https://elhisse-clprepas.github.io/atelier-seance-10-ln-ia/

Le ZIP historique est exclu par `.gitignore` ; les sources, les affiches fournies et l'aperçu autonome sont versionnés. Les contrôles techniques locaux passent ; le contrôle visuel desktop/mobile reste à effectuer faute de navigateur connecté dans la session. La publication ne vaut pas validation pédagogique : les documents restent **À RELIRE / À VALIDER**.

Pour les évolutions suivantes : modifier une portée limitée, exécuter `npm.cmd run verify`, examiner `git diff`, créer un commit descriptif puis pousser `main`. Chaque push déclenche les contrôles et le déploiement. Ne jamais utiliser de push forcé pour ce parcours.
