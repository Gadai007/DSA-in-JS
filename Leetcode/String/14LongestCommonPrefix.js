const LCP = (strs =  []) => {
    let prefix = ''
    for(let i =0; i < strs[0].length; i++){
        let char = strs[0][i]
        for(let j =0; j < strs.length; j++){
            if(strs[j][i] !== char) return prefix
        }
        prefix = prefix + char
    }
    return prefix
}

console.log(LCP(["flower","flow","flight"]))

//https://www.youtube.com/watch?v=gJOgI8TpSgc