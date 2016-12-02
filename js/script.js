
$(function(){

    // Display some statistics about this computer, using node's os module.
    var versions = {
        'node': process.version,
        'electron': process.versions['electron'],
        'chrome': process.versions['chrome']
    };

    var stats = $('.stats');
    const os = require('os');
    var prettyBytes = require('pretty-bytes');
    var dictionaryNetwork = os.networkInterfaces();

    function getNetworkInfo(dictionary) {
        Object.keys(dictionary).forEach(function(key) {
            var value = dictionary[key];

            stats.append('Network Interface: <span>' + key + '</span>' + '</br>');

            value.forEach(function(v) {
                stats.append('Address: <span>' + v.address + '</span>' + '</br>');
                stats.append('Netmask: <span>' + v.netmask + '</span>' + '</br>');
                stats.append('Family: <span>' + v.family + '</span>' + '</br>');
                stats.append('MAC: <span>' + v.mac + '</span>' + '</br>');
                stats.append('Internal: <span>' + v.internal + '</span>' + '</br>');
            });

        });
    }

    stats.append('Node version: <span>' + versions.node + '</span>');
    stats.append('Electron version: <span>' + versions.electron + '</span>');
    stats.append('Chrome version: <span>' + versions.chrome + '</span>');

    stats.append('OS Type: <span>' + os.type() + '</span>');
    stats.append('OS Platform: <span>' + os.platform() + '</span>');
    stats.append('OS Release: <span>' + os.release() + '</span>');

    stats.append('CPU Architecture: <span>' + os.arch() + '</span>');
    stats.append('CPU Model: <span>' + os.cpus()[0].model + '</span>');
    stats.append('CPU Speed: <span>' + os.cpus()[0].speed + ' MHz ' + '</span>');
    stats.append('Number of CPU cores: <span>' + os.cpus().length + '</span>');


    stats.append('Total Memory: <span>' + prettyBytes(os.totalmem())+ '</span>');
    stats.append('Free Memory: <span>' + prettyBytes(os.freemem())+ '</span>');

    stats.append('Home Directory: <span>' + os.homedir()+ '</span>');
    stats.append('Hostname: <span>' + os.hostname() + '</span>');
    stats.append('Temporary Directory: <span>' + os.tmpdir() + '</span>');

    stats.append('OS Uptime: <span>' + os.uptime() + '</span>');
    stats.append('Load Averages: <span>' + os.loadavg()[0] + ', ' + os.loadavg()[1] + ', ' + os.loadavg()[2] + '</span>');

    getNetworkInfo(dictionaryNetwork);

});