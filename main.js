onload = () => navigator.serviceWorker.register('sw.js')

const timer = document.querySelector('#timer')
let seconds = 25 * 60
let running = true

const convert = seconds => {
  if (!seconds) {
    clearInterval(interval)
    return '00:00'
  }
  const minutes = String(Math.floor(seconds / 60)).padStart(2, 0)
  seconds = String(seconds % 60).padStart(2, 0)
  return `${minutes}:${seconds}`
}

const tick = () => {
  timer.innerHTML = document.title = convert(seconds)
  seconds = Math.max(seconds - 1, 0)
}

tick()

const interval = setInterval(() => running && tick(), 1000)

timer.onclick = () => (running = !running)

onkeyup = ({ key }) => key === ' ' && timer.onclick()
