/**
 * Created by dongsj on 2017/2/11.
 */

process.on('message', function(m){
    console.log('message from parent: ' + JSON.stringify(m));
});

process.send({from: 'child'});