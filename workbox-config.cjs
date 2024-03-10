module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{js,css,png,html}'],
  swDest: 'dist/sw.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
}
