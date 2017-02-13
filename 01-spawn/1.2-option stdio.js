/**
 * Created by dongsj on 2017/2/11.
 */
var spawn = require('child_process').spawn;
var ls = spawn('ls', ['-al'], {
    stdio: 'inherit'
});

ls.on('close', function(code){
    console.log('child exists with code: ' + code);
});