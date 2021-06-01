/**Find the correct position to insert an element in the array */

const correctPosition = (arr, num) => {
    for(let i =0; i < arr.length; i++){
        if(arr[i] >= num){
            console.log(i)
            return
        }
    }
    console.log(arr.length)
}

correctPosition([1,3,5,6], 0)