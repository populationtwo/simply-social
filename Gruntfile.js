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
					sassDir: 'scss',
					cssDir : 'css'
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
				files  : ['scss/**/*.scss', 'scss/*.scss' ],
				tasks  : ['compass','cssmin'],
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