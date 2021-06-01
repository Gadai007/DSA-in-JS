/**Print all the unique 2 digit combinations of given numbers */

const uniqueNumbers = (arr) => {
    let set =new Set(arr)
    arr = [...set]

    for(let i = 0; i < arr.length ; i++){
        for(let j = i + 1; j < arr.length ; j++){
            console.log(arr[i], arr[j])
        }
    }
}

uniqueNumbers([1, 2, 3])