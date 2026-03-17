import './style.css'
import { Timer } from './timer.js'

document.querySelector('#app').innerHTML = `
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
`

Timer(app)