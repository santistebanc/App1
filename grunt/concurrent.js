module.exports = {

  // Task options
  options: {
    limit: 4
  },

  // final tasks
  final_1: [
  //concat js css
  'concat:final_css',
  'concat:final_js'
  ],

  // Production tasks
  prodFirst: [
  'clean'
  ],
  prodSecond: [
  'sass:prod',
  'uglify'
  ],

  // Image tasks
  imgFirst: [
  'imagemin'
  ]
};
