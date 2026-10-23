import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import * as data from '../src/data.js';

// Exécuter les fonctions réelles avec un DOM minimal. Ne remplace pas un test navigateur.
function session(stored='{}',hash='#atelier'){
  const events={};const nodes=new Map();const app={innerHTML:''};
  const document={activeElement:null,getElementById:()=>app,
    querySelector:s=>nodes.get(s)||null,querySelectorAll:()=>[]};
  const ctx=vm.createContext({...data,document,location:{hash},
    localStorage:{getItem:()=>stored,setItem(){},removeItem(){}},
    window:{addEventListener:(name,fn)=>events[name]=fn,scrollTo(){}},confirm:()=>true});
  const source=fs.readFileSync(new URL('../src/main.js',import.meta.url),'utf8')
    .replace(/^import .*;\r?\n/gm,'');
  vm.runInContext(source,ctx);
  return {run:code=>vm.runInContext(code,ctx),document,nodes,events,app};
}

test('Brouillon corrompu : conserver seulement les champs textuels connus',()=>{
  for(const bad of ['null','[]','42','{','{"name":3,"corrections":{},"unknown":"x"}']){
    const s=session(bad);assert.equal(s.run('work.name'),'');assert.equal(s.run('work.corrections'),'');
    assert.equal(s.run('Object.hasOwn(work,"unknown")'),false);assert.match(s.run('ficha()'),/À RELIRE/);
  }
  assert.equal(session('{"name":"Mon projet"}').run('work.name'),'Mon projet');
});

test('Ancre mal encodée et lien aller au contenu',()=>{
  assert.equal(session('{}','#%').run('page'),'accueil');
  const s=session();let focused=false;s.nodes.set('#main-content',{focus(){focused=true;}});
  s.run('location.hash="#main-content"');s.events.hashchange();
  assert.equal(s.run('page'),'atelier');assert.equal(focused,true);
});

test('Une modification du projet annule la relecture, la réflexion portfolio la conserve',()=>{
  const s=session();s.run('validation.fill(true);edit({target:{dataset:{field:"name"},value:"Projet modifié"}})');
  assert.equal(s.run('validation.some(Boolean)'),false);
  s.run('validation.fill(true);edit({target:{dataset:{field:"experience"},value:"Apprentissage"}})');
  assert.equal(s.run('validation.every(Boolean)'),true);
});

test('Le rendu restaure le focus du menu, des slides et des cases de relecture',()=>{
  const s=session();
  for(const [active,selector] of [[{id:'next-slide'},'#next-slide'],[{id:'menu-toggle'},'#menu-toggle'],[{dataset:{check:'2'}},'[data-check="2"]']]){
    let focused=false;s.document.activeElement=active;s.nodes.set(selector,{focus(){focused=true;}});
    s.run('render()');assert.equal(focused,true);
  }
});

test('Exports V1, V2 et portfolio : saisies réelles et statut réservé',()=>{
  const s=session();s.run('work.name="Projet test";work.corrections="Correction de test explicitée"');
  for(const output of [s.run('ficha()'),s.run('ficha("V2")'),s.run('portfolio()')]){
    assert.match(output,/Projet test/);assert.match(output,/À RELIRE/);
    assert.match(output,/challenge-100jours-automne-2026/);
    assert.match(output,/Séance 10 — lundi 26 octobre 2026/);
  }
  assert.match(s.run('ficha("V2")'),/Correction de test explicitée/);
  assert.match(s.run('review()'),/AUCUNE VALIDATION AUTOMATIQUE/);
});

test('Les affiches fournies sont préservées et associées aux slides 1, 2 et 4',()=>{
  const originals=['Atelier LN-IA _ Fiche projet V1.png','Dossier professionnel — Module 03.png','Note de cadrage _ dossier professionnel IA.png'];
  const s=session();
  data.posters.forEach((p,i)=>{
    assert.deepEqual(fs.readFileSync(new URL('../Affiches/'+originals[i],import.meta.url)),fs.readFileSync(new URL('../public/'+p.src.slice(2),import.meta.url)));
    assert.ok(p.alt&&p.caption);
    assert.ok(s.run('posterGallery()').includes(p.src));
  });
  for(const [index,id] of [[0,'s10'],[1,'module03'],[3,'s09']]){
    s.run('slide='+index);assert.ok(s.run('slidePoster()').includes('data-poster="'+id+'"'));
  }
  s.run('slide=2');assert.equal(s.run('slidePoster()'),'');
});
