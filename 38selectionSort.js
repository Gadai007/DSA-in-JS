/**Selection sort */

const selectionSort = (arr) => {
    for(let i = 0; i < arr.length - 1; i++){
        for(let j  = i + 1; j < arr.length; j++){
            if(arr[j] < arr[i]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr)
} 

selectionSort([5,4,3,2,1])