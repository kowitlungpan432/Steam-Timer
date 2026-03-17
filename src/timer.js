export function Timer(root) {
  let time = 0
  let timer = null

  // ใช้ root แทน document (กัน null)
  const elTimer = root.querySelector("#timer")
  const btnStart = root.querySelector("#button-start")
  const btnStop = root.querySelector("#button-stop")
  const btnReset = root.querySelector("#button-reset")

  const btnPlus5 = root.querySelector(".plus5")
  const btnPlus10 = root.querySelector(".plus10")
  const btnPlus20 = root.querySelector(".plus20")

  const inputMinute = root.querySelector("#input-minute")
  const btnSubmit = root.querySelector("#submit")

  function updateDisplay(){
    const hrs = String(Math.floor(time / 3600)).padStart(2,'0')
    const min = String(Math.floor((time % 3600) / 60)).padStart(2,'0')
    const sec = String(time % 60).padStart(2,'0')

    elTimer.innerText = `${hrs}:${min}:${sec}`
  }

  // ▶️ Start
  btnStart.onclick = () => {
    if(timer) return

    timer = setInterval(() => {
      if(time > 0){
        time--
        updateDisplay()
      } else {
        clearInterval(timer)
        timer = null
      }
    },1000)
  }

  // ⏹ Stop
  btnStop.onclick = () => {
    clearInterval(timer)
    timer = null
  }

  // 🔄 Reset
  btnReset.onclick = () => {
    clearInterval(timer)
    timer = null
    time = 0
    updateDisplay()
  }

  function addTime(sec){
    time += sec
    updateDisplay()
  }

  // ➕ ปุ่มเพิ่มเวลา (เช็ค null กันพัง)
  btnPlus5 && (btnPlus5.onclick = () => addTime(300))
  btnPlus10 && (btnPlus10.onclick = () => addTime(600))
  btnPlus20 && (btnPlus20.onclick = () => addTime(1200))

  // ⌨️ input
  btnSubmit && (btnSubmit.onclick = () => {
    const min = inputMinute.value || 0
    addTime(Number(min) * 60)
  })

  // init
  updateDisplay()
}