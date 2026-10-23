import fs from 'node:fs';import path from 'node:path';
const root=path.resolve('.');
let html=fs.readFileSync(path.join(root,'index.html'),'utf8');
let css=fs.readFileSync(path.join(root,'src/style.css'),'utf8');
let data=fs.readFileSync(path.join(root,'src/data.js'),'utf8').replace(/export const /g,'const ');
let main=fs.readFileSync(path.join(root,'src/main.js'),'utf8').replace(/^import '\.\/style\.css';\s*/m,'').replace(/^import \{[^}]*\} from '\.\/data\.js';\s*/m,'');
const assets=['logo-ln-ia.webp','affiche-seance10.webp','annonce-seance11.webp','responsabilite-humaine.webp','affiche-atelier-s10.png','affiche-module03.png','affiche-note-cadrage-s09.png'];
const map={};for(let a of assets){const bytes=fs.readFileSync(path.join(root,'public/assets',a)).toString('base64');const type=a.endsWith('.png')?'png':'webp';map[`./assets/${a}`]=`data:image/${type};base64,${bytes}`;}
for(let [name,uri] of Object.entries(map)){main=main.split(name).join(uri);data=data.split(name).join(uri);}
// Escape nested script terminators defensively
main=(data+'\n'+main).replace(/<\/script/gi,'<\\/script');
html=html.replace('<script type="module" src="/src/main.js"></script>',`<style>${css}</style><script>${main}</script>`);
fs.writeFileSync(path.join(root,'APERCU-AUTONOME-SEANCE-10.html'),html,'utf8');
console.log('Aperçu autonome créé:',Math.round(Buffer.byteLength(html)/1024),'Kio');
