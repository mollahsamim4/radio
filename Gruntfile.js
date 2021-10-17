module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            dist: {
                files: {
                    'src/sass/app.scss': 'src/css/app.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['src/sass/app.scss'],
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};