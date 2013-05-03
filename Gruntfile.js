module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.initConfig({
    concat: {
      js: {
        src: ['src/lib.js', 'src/calculate.js', 'src/graph.js', 'src/app.js', 'src/scripts.js'],
        dest: 'lib/scripts.js'
      },
    }
  });

  grunt.registerTask('default', ['concat:js']);
};
