import { ua, vendor, platform } from './constants'

let script = document.createElement('script')

script.type = 'text/javascript'

script.innerText += `
 Object.defineProperty(window.navigator, 'userAgent', { get: () => { return '${ua}'; } });
 Object.defineProperty(window.navigator, 'vendor', { get: () => { return '${vendor}'; } });
 Object.defineProperty(window.navigator, 'platform', { get: () => { return '${platform}'; } });
`

document.documentElement.insertBefore(script, document.documentElement.firstChild)

document.addEventListener('beforeload', e => {
 Object.defineProperty(window.navigator, 'userAgent', { get: () => { return ua } })
 Object.defineProperty(window.navigator, 'vendor', { get: () => { return vendor } })
 Object.defineProperty(window.navigator, 'platform', { get: () => { return platform } })
}, true)
