module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{js,png,html}'],
  swDest: 'dist/sw.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
}
