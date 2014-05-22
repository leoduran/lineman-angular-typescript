/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function (lineman) {
    //Override file patterns here
    return {
        js: {
            vendor: [
                "vendor/bower/jquery/dist/jquery.js",
                "vendor/bower/angular/angular.js",
                "vendor/bower/bootstrap/dist/js/bootstrap.js",
                "vendor/bower/angular-resource/angular-resource.js",
                "vendor/bower/angular-route/angular-route.js",
                "vendor/bower/lodash/dist/lodash.js",
                "vendor/js/**/*.js"
            ],
            app: [
                "app/js/app.js",
                "app/js/**/*.js"
            ]
        },

        css: {
            vendor: [
                "vendor/bower/bootstrap/dist/css/bootstrap.css",
                "vendor/css/**/*.css"
            ]
        },

        less: {
            compile: {
                options: {
                    paths: ["app/css/**/*.less"]
                }
            }
        }
    };
};
