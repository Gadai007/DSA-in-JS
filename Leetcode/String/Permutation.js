const permutation = (proccessed = '', unproccessed = '') => {
    if(unproccessed.length == 0){
        console.log(proccessed)
        return
    }

    let char = unproccessed.charAt(0)
    unproccessed = unproccessed.substring(1)

    for(let i =0; i <= proccessed.length; i++){
        let first = proccessed.substring(0, i)
        let second = proccessed.substring(i)
        permutation(first + char + second, unproccessed)
    }
}

permutation('', 'abc')