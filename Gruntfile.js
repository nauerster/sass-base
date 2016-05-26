'use strict';
/*
    Grunt installation:
    -------------------
    npm install -g grunt-cli
    npm install -g grunt-init
    npm init (creates a `package.json` file)

    Simple Dependency Install:
    --------------------------
    npm install (from the same root directory as the `package.json` file

    Install/Update Plugin :
    --------------------------
    npm install [plugin-name] --save-dev

    UnInstall Plugins:
    --------------------------
    npm uninstall [plugin-name] --save-dev

    Tasks:
    --------------------------
    grunt (default is to watch both sass and coffeescript files)
    grunt sass (compile once)
    grunt watch (you can also explicitly call the watch task)

    All commands are detailed by running the following:
    --------------------------
    grunt --help

    Globbing Patterns:
    --------------------------
    * matches any number of characters, but not /
    ? matches a single character, but not /
    ** matches any number of characters, including /, as long as it's the only thing in a path part
    {} allows for a comma-separated list of "or" expressions
    ! at the beginning of a pattern will negate the match

    Prefixes:
    --------------------------
    cwd: current working directory

*/

module.exports = function(grunt) {

  // Load grunt tasks automatically --> grunt task
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times --> grunt time
  require('time-grunt')(grunt);


  // CONFIG
  ///////////////////////////////////////////////////////

  grunt.initConfig({


    // Watches files for changes and runs tasks based on the changed files --> grunt watch
    watch: {
      css: {
        files: ['src/sass/**/*.{sass,scss}'],
        tasks: ['sass:dev'],
        options: {
          spawn: false
        }
      },
      // docs: {
      //   files: ['sass/**/*.{sass,scss}'],
      //   tasks: ['sassdoc'],
      //   options: {
      //     spawn: false
      //   }
      // }
    },

    // Deletes files and prevents duplication --> grunt clean
    clean: {
      dev: [
        'src/css/dev/*.css',
        'src/css/dev/*.map'
      ],
      prod: [
        'src/css/prod/*.css',
        'src/css/prod/*.map'
      ],
      docs: [
        'docs'
      ]
    },

    // Configure sass --> grunt sass
    sass: {                                                         // Task
      dev: {                                                        // Target
        options: {                                                  // Target options
          style: 'expanded',                                        // Output
          sourceMap: false
        },
        files: {                                                    // Dictionary of files
          'src/css/dev/theme.dev.css' : 'src/sass/styles.sass'      // 'destination': 'source'
        }
      },
      prod: {
        options: {
          style: 'compressed'
        },
        files: {
          'src/css/prod/theme.prod.css' : 'src/sass/styles.sass'
        }
      }
    },

    // Configure sass documentation --> grunt sassdoc
    sassdoc: {
      default: {
        src: 'src/sass',
        options: {
          dest: 'src/docs'
        }
      }
    },

    // Configure image optimization --> grunt imagemin
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'src/images/build/'
        }]
      }
    }

  });


  // TASKS
  ///////////////////////////////////////////////////////

  // Run all dev task
  grunt.registerTask('serve', [
    'clean:dev',
    'clean:docs',
    'watch'
  ]);


  // Run all build task that minify our code
  grunt.registerTask('build', [
    'clean:prod',
    'imagemin',
    'sass:prod'
  ]);

};
