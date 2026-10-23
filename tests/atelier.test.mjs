import {test} from 'node:test';
import assert from 'node:assert/strict';
import {slides,demos,rubric,prep,checks,flashcards,quiz,promptTemplates,resources} from '../src/data.js';

test('22 slides structurées avec note formateur',()=>{assert.equal(slides.length,22);slides.forEach(s=>{assert.ok(s.t&&s.k&&s.q&&s.n);assert.ok(s.b.length>=3);assert.ok(s.p>=0&&s.p<6);});});
test('Progression S09 → S10 → S11 et critères pédagogiques',()=>{assert.equal(rubric.length,12);assert.equal(prep.length,5);assert.equal(checks.length,10);assert.equal(demos.length,4);assert.equal(new Set(demos.map(x=>x.id)).size,4);});
test('Mémorisation et quiz cohérents',()=>{assert.equal(flashcards.length,12);assert.equal(quiz.length,10);quiz.forEach(q=>{assert.ok(q.q&&q.e);assert.ok(q.ok>=0&&q.ok<q.a.length);});});
test('Cinq prompts adaptés à la pratique',()=>{assert.equal(promptTemplates.length,5);assert.equal(resources.length,7);assert.ok(promptTemplates.some(x=>x.body.includes('Note de cadrage'))||promptTemplates.some(x=>x.body.includes('note de cadrage')));});

test('Tous les prompts interactifs portent le cycle et la date S10',()=>{
  for(const prompt of promptTemplates){
    assert.match(prompt.body,/challenge-100jours-automne-2026/);
    assert.match(prompt.body,/Séance 10 — lundi 26 octobre 2026/);
    assert.match(prompt.body,/À RELIRE \/ À VALIDER/);
  }
});
