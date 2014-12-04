module.exports = {
  bower_dep: {
    files: 'bower_components/**',
    tasks: ['wiredep'],
    options: {
      livereload: true,
    },
  },
  live: {
    files: ['app/**', 'bower_components/**'],
    options: {
      livereload: true,
    },
  },
}
