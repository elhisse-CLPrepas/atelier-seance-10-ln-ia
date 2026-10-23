# Règles des agents — atelier LN-IA S10

**Cycle :** Challenge 100 Jours — Relance Automne 2026  
**Identifiant du cycle :** `challenge-100jours-automne-2026`  
**Atelier de référence :** Séance 10 — lundi 26 octobre 2026 · Module 03 · Semaine 05  
**Décision éditoriale :** À RELIRE / À VALIDER par un humain

Mission : maintenir l'atelier Vite / JavaScript natif pour la séance 10, Module 03, Challenge 100 Jours Relance Automne 2026.

## Invariants pédagogiques
- S09 = note de cadrage ; S10 = fiche projet V1 ; S11 = plan du guide ; S12 = guide pratique V1.
- Dates S09 vendredi 23 octobre, S10 lundi 26 octobre, S11 vendredi 30 octobre, S12 lundi 2 novembre 2026.
- Ne pas inventer de résultats, dates de validation, données ou témoignages.
- Les exemples sont fictifs. Jamais d'approbation automatique.
- La V1 et une éventuelle V2 demeurent « À RELIRE / À VALIDER » tant qu'un humain n'a pas signé une décision.
- Source historique en `sources-originales/` : ne pas modifier. Les chemins 02-DOCUMENTS de juillet sont harmonisés en 03-documents pour le Challenge Automne 2026.

## Invariants techniques
- Vite léger sans framework ; `src/main.js`, `src/data.js`, `src/style.css`, `vite.config.js`.
- Absence d'API distante dans la production ; données de saisie seulement dans le navigateur, exports déclenchés par l'utilisateur.
- Responsive, clavier, focus, thème bleu nuit / blanc / or, logo LN-IA.
- Maintenir un aperçu HTML autonome généré par `npm run standalone`.
- Vérifier le build et les interactions en navigateur avant diffusion.
- Pas de secrets, tokens ou identifiants dans le code ou les logs.
- Ne pas publier, supprimer ou forcer le push sans décision humaine.

## Procédure
1. Inspecter les fichiers et la source S09.
2. Définir une modification limitée.
3. Éditer et préserver les contenus validés.
4. Exécuter `npm run check && npm run build && npm run standalone`.
5. Tester desktop et mobile, exports V1 et portfolio, navigation slides, quiz.
6. Documenter les réserves et demander validation avant publication.
