module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{js,css,png,html,woff2}'],
  swDest: 'dist/sw.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
}
