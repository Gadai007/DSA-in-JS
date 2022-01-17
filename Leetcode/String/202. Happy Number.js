const happyNumber = (num) => {
    let set = new Set()
    while(true){
        num =  [...num.toString(10)].reduce((acc, curr) => acc + (curr*curr),0)
        if(num === 1) return true
        if(set.has(num)) return false

        set.add(num)
    }
}

console.log(happyNumber(19))