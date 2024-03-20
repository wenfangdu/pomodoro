let seconds = 25 * 60
let running = true

const convert = seconds => {
  if (!seconds) {
    clearInterval(interval)
    return '00:00'
  }

  let minutes = Math.floor(seconds / 60)
  minutes = String(minutes).padStart(2, '0')
  seconds = String(seconds % 60).padStart(2, '0')

  return `${minutes}:${seconds}`
}

const tick = () => {
  postMessage(convert(seconds))
  seconds = Math.max(seconds - 1, 0)
}

tick()

const interval = setInterval(() => running && tick(), 1000)

onmessage = ({ data }) => data === ' ' && (running = !running)
