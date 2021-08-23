/**Program to sort only positive numbers of the array */

const positiveSortedArray = (arr: number[]) => {
    const filtered = arr.filter(e => e > 0).sort()
    let sorted: number[] = []
    let j = 0
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] > 0){
            sorted.push(filtered[j++])
        }else{
            sorted.push(arr[i])
        }
    }
    console.log(sorted)
}

positiveSortedArray([ 9, -2, 3, -1, 1, 5])