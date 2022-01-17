
for(var i = 0; i < 5; i++){
    function scope(x){
        setTimeout(() => {
            console.log(x)
        }, 1000)
    }
    scope(i)
}