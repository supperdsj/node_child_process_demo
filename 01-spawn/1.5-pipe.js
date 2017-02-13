/**
 * Created by dongsj on 2017/2/11.
 */
// echo "hello nodejs" | grep "nodejs"
var child_process = require('child_process');

var echo = child_process.spawn('echo', ['hello nodejs']);
var grep = child_process.spawn('grep', ['nodejs']);

grep.stdout.setEncoding('utf8');

echo.stdout.on('data', function (data) {
    grep.stdin.write(data);
});

echo.on('close', function (code) {
    if (code !== 0) {
        console.log('echo exists with code: ' + code);
    }
    grep.stdin.end();
});

grep.stdout.on('data', function (data) {
    console.log('grep: ' + data);
});

grep.on('close', function (code) {
    if (code !== 0) {
        console.log('grep exists with code: ' + code);
    }
});

//---------------

var spawn = require('child_process').spawn;
var grep2 = spawn('grep', ['nodejs']);

setTimeout(function () {
    grep2.stdin.write('1000\t');
}, 1000);
setTimeout(function () {
    grep2.stdin.write('2000\t');
}, 2000);
setTimeout(function () {
    grep2.stdin.write('hello nodejs \t hello javascript');
    grep2.stdin.end();
}, 3000);

grep2.stdout.on('data', function (data) {
    console.log('data from grep: ' + data);
});

grep2.on('close', function (code) {
    console.log('grep exists with code: ' + code);
});