module.exports = {
  final_js: {
    src: ['app/scripts/**.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/ember/ember.min.js',
    'bower_components/ember-data/ember-data.min.js',
    'bower_components/handlebars/handlebars.min.js',
    'bower_components/jquery/dist/jquery.min.js'],
    dest: 'final/scripts.js',
  },
  final_css: {
    src: ['src/styles/**.css', 'bower_components/bootstrap/dist/css/bootstrap.min.css'],
    dest: 'final/styles.css',
  }
};
