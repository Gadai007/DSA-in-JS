const countBinary = (s= '' ) => {
    let i=1
    let count = 0
    let prev = 0
    let curr = 1
    while(i < s.length){
        if(s.charAt(i-1) != s.charAt(i)){
            count += Math.min(prev, curr)
            prev = curr
            curr = 1
        }else{
            curr++
        }
        i++
    }
    return count+=Math.min(prev, curr)
}

console.log(countBinary('0011'))