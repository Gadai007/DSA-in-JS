const replaceElement = (arr = []) => {
    let res = []
    let max = arr[arr.length-1]
    for(let i = arr.length - 1; i >= 0; i--){
        if(i == arr.length -1){
            res[i] = -1
        }else{
            res[i] =  max
            max = Math.max(max, arr[i])
        }
    }
    return res
}

console.log(replaceElement([1,3,4,2]))