(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=0,n=null,r=e.querySelector(`#timer`),i=e.querySelector(`#button-start`),a=e.querySelector(`#button-stop`),o=e.querySelector(`#button-reset`),s=e.querySelector(`.plus5`),c=e.querySelector(`.plus10`),l=e.querySelector(`.plus20`),u=e.querySelector(`#input-minute`),d=e.querySelector(`#submit`);function f(){r.innerText=`${String(Math.floor(t/3600)).padStart(2,`0`)}:${String(Math.floor(t%3600/60)).padStart(2,`0`)}:${String(t%60).padStart(2,`0`)}`}i.onclick=()=>{n||=setInterval(()=>{t>0?(t--,f()):(clearInterval(n),n=null)},1e3)},a.onclick=()=>{clearInterval(n),n=null},o.onclick=()=>{clearInterval(n),n=null,t=0,f()};function p(e){t+=e,f()}s&&(s.onclick=()=>p(300)),c&&(c.onclick=()=>p(600)),l&&(l.onclick=()=>p(1200)),d&&(d.onclick=()=>{let e=u.value||0;p(Number(e)*60)}),f()}document.querySelector(`#app`).innerHTML=`
<div class="container">
  <div class="left-panel">
    <div id="timer">00:05:00</div>
    <div class="control-timer">
      <button id="button-start">Start</button>
      <button id="button-stop">Stop</button>
      <button id="button-reset">Reset</button>
    </div>
  </div>
  <div id="vertical-line"></div>
  <div class="right-panel">
    <div class="control-panel">
      <button class="add-timer plus5" data-time="300">+5</button>
      <button class="add-timer plus10" data-time="600">+10</button>
      <button class="add-timer plus20" data-time="1200">+20</button>
      </div>
      <div id="time-input">
        <input id="input-minute" type="number" />
        <button id="submit" type="submit">submit</button>
      </div>
      <div class="language">
        <h4>Change Language</h4>
        <select onchange="changeLanguage(this.value)">
        <option>English</option>
        <option>Thai</option>
        </select>
      </div>
  </div>
</div>
`,e(app);