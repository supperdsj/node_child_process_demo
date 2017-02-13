/**
 * Created by dongsj on 2017/2/11.
 */

//node --harmony parent.js
var child_process = require('child_process');

console.log('parent execArgv: ' + process.execArgv);

child_process.fork('./child.js', {
    execArgv: process.execArgv
});