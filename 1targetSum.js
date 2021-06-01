let ar = [15, 4, 9, 3, 2, 12, 11, 14, 21, 24, 2, 10];

const binaryApproach = (ar, target) => {
    ar.sort()
    let start = 0
    let end = ar.length - 1
    while(start < end){
        if(ar[start] + ar[end] === target){
            return true
        }
        else if(ar[start] + ar[end] < target){
            start++
        }else{
            end--
        }
    }
    return false;
}

const hashmapApproach = (ar, target) => {
    let hashmap = new Set()

    for(let i = 0; i < ar.length; i++){
        if(hashmap.has(target - ar[i])){
            return true
        }

        hashmap.add(ar[i])
    }
    return false
}

console.log(hashmapApproach(ar, 25))
