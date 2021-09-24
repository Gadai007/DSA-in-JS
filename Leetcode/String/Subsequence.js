const subsequence = (processed = '', unproccessed= '') => {
    if(unproccessed.length == 0){
        console.log(processed)
        return
    }

    let char = unproccessed.charAt(0)
    unproccessed = unproccessed.substring(1)

    subsequence(processed + char, unproccessed)
    subsequence(processed, unproccessed)
}

subsequence('', 'abc')