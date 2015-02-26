module.exports = function (grunt) {
	'use strict';

	// Load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		compass: {
			dist: {
				options: {
					sassDir: 'assets/scss',
					cssDir : 'assets/css',
					outputStyle : 'compressed'
				}
			}
		},

		cssmin: {
			options: {
				banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
				' * <%= pkg.homepage %>\n' +
				' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
				' * Licensed GPLv2+' +
				' */\n'
			},
			minify: {
				expand: true,

				cwd: 'css/',
				src: ['main.css'],

				dest: 'css/',
				ext: '.min.css'
			}
		},
		watch  : {
			css: {
				files  : ['assets/scss/**/*.scss', 'assets/scss/*.scss' ],
				tasks  : ['compass'],
				options: {
					debounceDelay: 500
				}
			}
		}
	});

	// Default task.
	grunt.registerTask('default', ['watch']);

	grunt.util.linefeed = '\n';
};