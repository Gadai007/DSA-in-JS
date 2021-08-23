/**Linear search algorithm in javascript */

const linearSearch = (arr, element) => {
    for(let i =0; i < arr.length; i++){
        if(arr[i] === element){
            return true
        }
    }
    return false
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 10, 11, 15], 12))