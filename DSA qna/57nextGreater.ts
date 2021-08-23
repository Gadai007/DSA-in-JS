/**Program to print the next greater element in the array */

const nextGreater = (arr: any[]) => {
    for(let i =0 ; i < arr.length; i++){
        let next =  -1
        for(let j = i; j < arr.length; j++){
            if(arr[i] < arr[j]){
                next = arr[j]
                break
            }
        }
        console.log(next)
    }
    
}

nextGreater([4, 5, 2, 25])