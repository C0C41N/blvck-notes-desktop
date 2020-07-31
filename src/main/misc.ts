export const winURL =
	process.env.NODE_ENV === 'development'
	  ? 'http://localhost:9080'
	  : `file://${__dirname}/index.html`

if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path')
    .join(__dirname, '/static')
    .replace(/\\/g, '\\\\')
}
