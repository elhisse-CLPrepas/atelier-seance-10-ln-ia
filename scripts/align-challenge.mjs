import fs from 'node:fs';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'..');
const context='**Cycle :** Challenge 100 Jours — Relance Automne 2026  \n**Identifiant du cycle :** `challenge-100jours-automne-2026`  \n**Atelier de référence :** Séance 10 — lundi 26 octobre 2026 · Module 03 · Semaine 05  \n**Décision éditoriale :** À RELIRE / À VALIDER par un humain';
const folders=['prompts','modeles','exemples','docs','ressources-selectionnees'];
const files=['README.md','INDEX-PACK.md','AGENTS.md',...folders.flatMap(dir=>fs.readdirSync(path.join(root,dir)).filter(x=>x.endsWith('.md')).map(x=>dir+'/'+x))];
for(const rel of files){
  const target=path.join(root,rel);
  let text=fs.readFileSync(target,'utf8').replace(/\r\n/g,'\n');
  if(!text.includes('**Identifiant du cycle :**'))text=text.replace(/^(# [^\n]+)\n/,'$1\n\n'+context+'\n');
  if(rel.startsWith('ressources-selectionnees/')){
    const provenance='> Adaptation pour la séance du 26 octobre 2026 depuis le support historique de juillet 2026. L’original est conservé sans modification dans `sources-originales/supports-seance-10-HISTORIQUE.zip`. Les chemins ci-dessous sont harmonisés pour le Challenge Automne 2026.';
    if(!text.includes('> Adaptation pour la séance'))text=text.replace(context,context+'\n\n'+provenance+(path.basename(rel).startsWith('resultat-')?'\n\n> EXEMPLE FICTIF : les récits, corrections et contrôles décrits ne constituent pas des activités attestées pour la séance Automne 2026.':''));
    text=text.replaceAll('02-DOCUMENTS','03-documents')
      .replace('**Date de preparation :** 03 juillet 2026','**Date de préparation du support historique :** 03 juillet 2026  \n**Date de la séance adaptée :** lundi 26 octobre 2026')
      .replace('**Date :** 03 juillet 2026','**Date de la séance illustrée (exemple fictif) :** lundi 26 octobre 2026')
      .replace('CHALLENGE 100 JOURS - FORMATION IA PRATIQUE','Challenge 100 Jours — Relance Automne 2026')
      .replace('portfolio/preuve-10-fiche-projet-v1.md','07-portfolio/preuve-seance-10.md');
    if(/^ressources-selectionnees\/0[0-4]-prompt/.test(rel)&&!text.includes('Contexte : challenge-100jours-automne-2026'))text=text.replace('```text\n','```text\nContexte : challenge-100jours-automne-2026 — Challenge 100 Jours — Relance Automne 2026.\nSéance 10 — lundi 26 octobre 2026 ; Module 03 ; Semaine 05.\nS09 : note de cadrage (23 octobre) ; S11 : plan (30 octobre) ; S12 : guide V1 (2 novembre 2026).\nAucune activité ni validation humaine ne doit être inventée. Statut : À RELIRE / À VALIDER.\n\n');
  }
  fs.writeFileSync(target,text);
}
const dataPath=path.join(root,'src/data.js');
let data=fs.readFileSync(dataPath,'utf8');
if(!data.includes('export const workshopContext='))data='export const workshopContext='+JSON.stringify(context)+';\n'+data;
if(!data.includes('body:`Contexte : challenge-100jours-automne-2026'))data=data.replaceAll('body:`','body:`Contexte : challenge-100jours-automne-2026 — Challenge 100 Jours — Relance Automne 2026.\\nSéance 10 — lundi 26 octobre 2026 ; Module 03 ; Semaine 05.\\nS09 : note de cadrage (vendredi 23 octobre) ; S11 : plan du guide (vendredi 30 octobre) ; S12 : guide pratique V1 (lundi 2 novembre 2026).\\nDistinguer date de séance, date réelle de production et décision humaine. Ne rien inventer ; statut À RELIRE / À VALIDER.\\n\\n');
fs.writeFileSync(dataPath,data);
const mainPath=path.join(root,'src/main.js');
let main=fs.readFileSync(mainPath,'utf8').replace('import {meta,','import {workshopContext,meta,');
for(const name of ['ficha','plan','portfolio','review','quizFile']){
  const pattern=new RegExp('(function '+name+'\\([^)]*\\)\\{return `[^`\\\\]*?\\\\n\\\\n)(?!\\$\\{workshopContext\\})');
  main=main.replace(pattern,'$1${workshopContext}\\n\\n');
}
fs.writeFileSync(mainPath,main);
console.log(`Contexte harmonisé dans ${files.length} documents Markdown ; archive originale exclue.`);
