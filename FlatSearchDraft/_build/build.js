/*
 * This is an example build file that demonstrates how to use the build system for
 * require.js.
 *
 * THIS BUILD FILE WILL NOT WORK. It is referencing paths that probably
 * do not exist on your machine. Just use it as a guide.
 *
 *
 */

({
    
    baseUrl: "../app",


    out: "../app/app-live.js",
    mainConfigFile: '../app/main.js',

    include: ['requireLib'],
    paths: {
        requireLib: '../scripts/require'
    },

    name: "app",
    wrapShim: true,
    optimize: "uglify2",
    keepBuildDir: true,
    normalizeDirDefines: "all",

    logLevel: 0
})