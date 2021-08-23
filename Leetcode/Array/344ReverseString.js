const reverse = (str) => {
    let start = 0
    let end =  str.length - 1
    while(start <= end){
        let temp = str[start]
        str[start] = str[end]
        str[end] = temp
        start++
        end--
    }
    return str
}

console.log(reverse(['h', 'e', 'l', 'l', 'o']))