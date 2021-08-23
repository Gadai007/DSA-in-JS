/**Program to print all the permutation of string */

const permutation = (processed, unprocessed) => {
    if(unprocessed.length === 0){
        console.log(processed)
        return
    }

    let char = unprocessed.charAt(0)
    unprocessed = unprocessed.substring(1)

    for(let i = 0; i <= processed.length; i++){
        let first = processed.substring(0, i)
        let second = processed.substring(i)
        permutation(first + char + second, unprocessed)
    }
}


permutation("", "abc")