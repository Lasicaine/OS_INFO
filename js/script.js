
$(function(){

    // Display some statistics about this computer, using node's os module.
    var versions = {
        'node': process.version,
        'electron': process.versions['electron'],
        'chrome': process.versions['chrome']
    };

    const os = require('os');
    var prettyBytes = require('pretty-bytes');
    var dictionary = os.networkInterfaces();
    var callback = function(key, value){
        $('.stats').append('Network interface: <span>' + key + '</span>' + '</br>');

        value.forEach(function(v) {
            $('.stats').append('Address: <span>' + v.address + '</span>');
        });
    };


    function dictionaryForEach(dictionary, callback) {
        Object.keys(dictionary).forEach(function(key) {
            var value = dictionary[key];
            callback(key, value);
        });
    }


    $('.stats').append('Node version: <span>' + versions.node + '</span>');
    $('.stats').append('Electron version: <span>' + versions.electron + '</span>');
    $('.stats').append('Chrome version: <span>' + versions.chrome + '</span>');

    $('.stats').append('OS type: <span>' + os.type() + '</span>');
    $('.stats').append('OS platform: <span>' + os.platform() + '</span>');
    $('.stats').append('OS release: <span>' + os.release() + '</span>');

    $('.stats').append('CPU architecture: <span>' + os.arch() + '</span>');
    $('.stats').append('CPU Model: <span>' + os.cpus()[0].model + '</span>');
    $('.stats').append('CPU Speed: <span>' + os.cpus()[0].speed + ' MHz ' + '</span>');
    $('.stats').append('Number of CPU cores: <span>' + os.cpus().length + '</span>');


    $('.stats').append('Total memory: <span>' + prettyBytes(os.totalmem())+ '</span>');
    $('.stats').append('Free memory: <span>' + prettyBytes(os.freemem())+ '</span>');

    $('.stats').append('Home directory: <span>' + os.homedir()+ '</span>');
    $('.stats').append('Hostname: <span>' + os.hostname() + '</span>');
    $('.stats').append('Temporary directory: <span>' + os.tmpdir() + '</span>');

    $('.stats').append('OS uptime: <span>' + os.uptime() + '</span>');
    $('.stats').append('Load Averages: <span>' + os.loadavg()[0] + ', ' + os.loadavg()[1] + ', ' + os.loadavg()[2] + '</span>');

    dictionaryForEach(dictionary, callback);
});