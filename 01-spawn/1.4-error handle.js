/**
 * Created by dongsj on 2017/2/11.
 */
var spawn = require('child_process').spawn;
var child = spawn('bad_command');

child.on('error', (err) => {
    console.log('Failed to start child process 1.');
});

var child2 = spawn('ls', ['nonexistFile']);

child2.stderr.on('data', function(data){
    console.log('Error msg from process 2: ' + data);
});

child2.on('error', (err) => {
    console.log('Failed to start child process 2.');
});

var child3 = spawn('ls333', ['nonexistFile']);

child3.stderr.on('data', function(data){
    console.log('Error msg from process 3: ' + data);
});

child3.on('error', (err) => {
    console.log('Failed to start child process 3.');
});