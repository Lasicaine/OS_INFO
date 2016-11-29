
$(function(){

    // Display some statistics about this computer, using node's os module.
    var versions = {
        'node': process.version,
        'electron': process.versions['electron'],
        'chrome': process.versions['chrome']
    };

    const os = require('os');
    var prettyBytes = require('pretty-bytes');

    $('.stats').append('Node: <span>' + versions.node + '</span>');
    $('.stats').append('Electron: <span>' + versions.electron + '</span>');
    $('.stats').append('Chrome: <span>' + versions.chrome + '</span>');
    $('.stats').append('CPU architecture: <span>' + os.arch() + '</span>');
    $('.stats').append('CPU Model: <span>' + os.cpus()[0].model + '</span>');
    $('.stats').append('CPU Speed: <span>' + os.cpus()[0].speed + ' MHz ' + '</span>');
    $('.stats').append('Number of CPU cores: <span>' + os.cpus().length + '</span>');


    $('.stats').append('Total memory: <span>' + prettyBytes(os.totalmem())+ '</span>');
    $('.stats').append('Free memory: <span>' + prettyBytes(os.freemem())+ '</span>');

    $('.stats').append('Home Directory: <span>' + os.homedir()+ '</span>');
    $('.stats').append('Hostname: <span>' + os.hostname() + '</span>');
});