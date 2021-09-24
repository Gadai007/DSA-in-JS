/**Check if string has duplicate letters */

const myApproach = (str) => {
    let set = new Set()
    str.toLowerCase()
    for(let i =0; i < str.length; i++){
        if(str[i] != ' '){
            if(set.has(str[i])){
                return true
            }
            set.add(str[i])
        }
    }
    return false
}
