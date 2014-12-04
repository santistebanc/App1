module.exports = {
  // Development settings
  dev: {
    options: {
      outputStyle: 'nested',
      sourceMap: true
    },
    files: [{
      expand: true,
      cwd: 'app/styles',
      src: ['*.scss'],
      dest: 'dist/styles',
      ext: '.css'
    }]
  },
  // Production settings
  prod: {
    options: {
      outputStyle: 'compressed',
      sourceMap: false
    },
    files: [{
      expand: true,
      cwd: 'app/styles',
      src: ['*.scss'],
      dest: 'dist/styles',
      ext: '.css'
    }]
  }
};
