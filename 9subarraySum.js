const subArraySum = (ar, target) => {
    for(let i =0; i < ar.length; i++){
        let newArr = []
        let sum = 0
        for(let j = i; j < ar.length; j++){
            sum += ar[j]
            newArr.push(ar[j])
            if(sum === target){
                console.log(newArr)
            }
        }
    }
}

// subArraySum([3,4,-7,1,3,3,1,-4], 7)

const zeroSubArraySum = (ar) => {
    for(let i =0; i < ar.length; i++){
        let sum = ar[i]
        if(sum === 0) return true
        for(let j = i; j < ar.length; j++){
            sum += ar[j]
            if(sum === 0){
                return true
            }
        }
    }
    return false
}

console.log(zeroSubArraySum([3, 4, -7, 3, 1, 3, 1, -4, -2, -2]))
console.log(zeroSubArraySum([3, 5]))