/**Converting string to jadencase */

const jadenCase = (str) => {
    let x = str.split(" ")
    let y = []
    for(let i = 0; i < x.length; i++){
        let s = x[i].split("")
        let temp = s[0]
        s[0] = temp.toUpperCase()
        y.push(s.join(""))
    }
    return y.join(' ')
}

console.log(jadenCase("How can mirrors be real if our eyes aren't real"))