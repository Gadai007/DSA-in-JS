/**insertion sort */

const insertionsort = (arr: any[], n = arr.length ) => {
    for(let i =0; i < n-1; i++){
        for(let j = i + 1; j > 0; j--){
            if(arr[j] < arr[j-1]){
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }else{
                break
            }
        }
    }
    console.log(arr)
}

insertionsort([5,4,3,1,2])