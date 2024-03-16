if (import.meta.env.PROD) {
  onload = () => navigator.serviceWorker.register('sw.js')
}

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
  document.title = convert(seconds)
  seconds = Math.max(seconds - 1, 0)
}

tick()

const interval = setInterval(() => running && tick(), 1000)

onkeyup = ({ key }) => key === ' ' && (running = !running)
