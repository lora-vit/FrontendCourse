module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
         
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: 'js/src/*.js',
        dest: 'js/dist/script.min.js'
      }
    },
    uglify: {
      dist: {
        src: 'js/dist/script.min.js',
        dest: 'js/dist/script.min.js'
      }
    },
  sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',
        src: ['*.scss'],
        dest: 'styles',
        ext: '.css'
      }]
    }
  }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
 // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify','sass']);

};