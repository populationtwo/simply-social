module.exports = function (grunt) {
	'use strict';

	// Load all grunt tasks
	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	// Project configuration
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),

		concat: {
			dist: {
				src : ['assets/js/src/*.js', 'assets/js/*.js'],
				dest: 'assets/js/build/production.js'
			}
		},

		jshint: {
			all: ['assets/js/*.js']
		},

		uglify: {
			build: {
				src : 'assets/js/build/production.js',
				dest: 'assets/js/build/production.min.js'
			}
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd   : 'assets/img/',
					src   : ['**/*.{png,jpg,gif}'],
					dest  : 'assets/img/build/'
				}]
			}
		},

		compass: {
			dist: {
				options: {
					sassDir    : 'assets/scss',
					cssDir     : 'assets/css',
					outputStyle: 'compressed'
				}
			}
		},


		scsslint: {
			allFiles: ['assets/scss/**/*.scss', 'assets/scss/*.scss'],
			options : {
				bundleExec    : true,
				colorizeOutput: true
			}
		},

		watch: {
			css    : {
				files  : ['assets/scss/**/*.scss', 'assets/scss/*.scss'],
				tasks  : ['compass'],
				options: {
					debounceDelay: 500
				}
			},
			scripts: {
				files  : ['assets/js/*.js'],
				tasks  : ['concat', 'uglify', 'jshint'],
				options: {
					spawn: false
				}
			}
		}
	} );

	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-imagemin' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-compass' );
	grunt.loadNpmTasks( 'grunt-scss-lint' );

	// Default task.
	grunt.registerTask( 'default', ['concat', 'uglify', 'imagemin', 'scsslint', 'jshint'] );

	grunt.util.linefeed = '\n';
};