import {spawn} from 'node:child_process';
import {mkdtemp,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
const profile=await mkdtemp(path.join(tmpdir(),'s11-browser-'));
const browser=spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--disable-gpu','--no-first-run','--remote-debugging-port=9337','--user-data-dir='+profile,'about:blank'],{stdio:'ignore',windowsHide:true});
let ws;
try {
 let tabs;
 for(let i=0;i<60;i++){try{tabs=await(await fetch('http://127.0.0.1:9337/json')).json();break;}catch{await new Promise(r=>setTimeout(r,250));}}
 ws=new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);
 await new Promise(r=>ws.addEventListener('open',r,{once:true}));
 let id=0;const pending=new Map();
 ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(m.error):p.resolve(m.result);}});
 const call=(method,params={})=>new Promise((resolve,reject)=>{const n=++id;pending.set(n,{resolve,reject});ws.send(JSON.stringify({id:n,method,params}));});
 const run=async expression=>{const r=await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
 const check=(value,label)=>{if(!value)throw Error(label);console.log('PASS '+label);};
 await call('Page.enable');
 await call('Page.navigate',{url:pathToFileURL(path.resolve('APERCU-AUTONOME-SEANCE-10.html')).href});
 for(let i=0;i<60;i++){if(await run("!!document.querySelector('.poster-gallery')"))break;await new Promise(r=>setTimeout(r,100));}
 for(const width of [1440,390]){
 await call('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<500});
 await run("location.hash='accueil'");
 await new Promise(r=>setTimeout(r,200));
 check(await run("document.querySelectorAll('.poster-card').length===4"),'four posters '+width);
 await run("document.querySelector('.poster-card [data-poster=s11]').click()");
 check(await run("document.querySelector('#poster-dialog').open && document.querySelector('#poster-large').complete && document.querySelector('#poster-large').naturalWidth===1122"),'S11 modal '+width);
 await call('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27,nativeVirtualKeyCode:27});
 await call('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27,nativeVirtualKeyCode:27});
 await new Promise(r=>setTimeout(r,150));check(await run("!document.querySelector('#poster-dialog').open"),'Escape closes modal '+width);
 await run("location.hash='presentation'");await new Promise(r=>setTimeout(r,150));
 await run("document.querySelector('#slide-picker').value='20';document.querySelector('#slide-picker').dispatchEvent(new Event('change'))");
 check(await run("!!document.querySelector('.slide-poster [data-poster=s11]')"),'slide 21 '+width);
 await call('Input.dispatchKeyEvent',{type:'keyDown',key:'ArrowRight',code:'ArrowRight'});
 check(await run("document.querySelector('#slide-picker').value==='21'"),'keyboard navigation '+width);
 await run("document.querySelector('#slide-picker').value='20';document.querySelector('#slide-picker').dispatchEvent(new Event('change'))");
 const shot=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:true});
 await writeFile('docs/verification-s11-slide-'+width+'.png',Buffer.from(shot.data,'base64'));
 await run("location.hash='ressources'");await new Promise(r=>setTimeout(r,150));
 check(await run("document.querySelector('.banner-next img').naturalWidth===1122 && getComputedStyle(document.querySelector('.banner-next img')).display!=='none'"),'resources image '+width);
 check(await run("document.documentElement.scrollWidth<=innerWidth"),'resources no overflow '+width);
 }
 await run("location.hash='atelier'");await new Promise(r=>setTimeout(r,150));
 await run("window.__exports=[];URL.createObjectURL=b=>{window.__exports.push(b);return 'blob:test'};HTMLAnchorElement.prototype.click=function(){};document.querySelector('#export-v1').click();document.querySelector('#export-portfolio').click()");
 check(await run("window.__exports.length===2"),'V1 and portfolio downloads');
 await run("location.hash='quiz'");await new Promise(r=>setTimeout(r,150));
 check(await run("document.querySelectorAll('.quiz-question').length===10"),'quiz renders');
 await call('Browser.close');
} finally {ws?.close();browser.kill();}
