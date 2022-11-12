function timer(time){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(time);
        },time)
    });
}

timer(1000).then(function(time){
    console.log('time'+time);
    return timer(time+1000);
}).then(function(time){
    console.log('time'+time);
})