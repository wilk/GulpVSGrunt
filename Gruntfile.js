'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            dist: ['app/**/*.js']
        },
        concat: {
            dist: {
                src: ['app/**/*.js'] ,
                dest: 'dist/app.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/app.js': ['dist/app.js']
                }
            }
        }
    });

    grunt.registerTask('build', [
        'jshint',
        'concat',
        'uglify'
    ]);
};