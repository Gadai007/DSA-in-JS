/*Bubble sort algorithm in javascript */
const bubblesort = (arr: any[]) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}

// bubblesort([5,4,3,2,1])


const recursive = (arr: any[], n = arr.length): any[] => {
    if(n === 1) return arr

    for(let i =0; i < n; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }

    return recursive(arr, n-1)
}

console.log(recursive([5,4,3,1,2]));