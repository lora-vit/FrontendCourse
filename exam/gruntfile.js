module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
         
    concat: {
      options: {
        separator: ' '
      },
      dist: {
        src: 'styles/css/*.css',
        dest: 'styles/css/main.css'
      }
    },
    uglify: {
      dist: {
        src: 'js/main.js',
        dest: 'js/main.min.js'
      }
    },
  sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles/scss',
        src: ['*.scss'],
        dest: 'styles/css',
        ext: '.css'
      }]
    }
  },
cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'styles/css',
      src: ['main.css'],
      dest: 'styles/css',
      ext: '.min.css'
    }]
  }
}

  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');  
 

  // Default task(s).
  grunt.registerTask('default', ['sass','concat', 'uglify','cssmin']);

};