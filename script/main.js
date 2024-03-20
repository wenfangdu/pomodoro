const worker = new Worker(new URL('worker.js', import.meta.url), { type: 'module' })

worker.onmessage = ({ data }) => (document.title = data)

onkeyup = ({ key }) => key === ' ' && worker.postMessage(' ')

onload = () => import.meta.env.PROD && navigator.serviceWorker.register('sw.js')
