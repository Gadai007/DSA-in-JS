let ar = [4,5,6]

const myApproach = (ar, k) => {
    for(let i = 0; i < ar.length; i++){
        let start = i
        let end = Math.min(i+k-1, ar.length-1)
        reverse(ar, start, end)
    }
    console.log(ar)
}

const reverse = (ar, start, end) => {
    while(start < end){
        let temp = ar[start]
        ar[start] = ar[end]
        ar[end] = temp
        start++
        end--
    }
}

const onlineApproach = (ar, k) => {
    for(let i = 0; i < k; i++){
        ar.unshift(ar.pop())
    }
    console.log(ar)
}

onlineApproach(ar, 2)