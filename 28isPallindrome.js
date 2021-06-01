/**Check if an array is palindrome in javascript */

const isPallindrome = (arr) => {
    let start = 0
    let end = arr.length - 1
    while(start <= end){
        if(arr[start] !== arr[end]){
            return false
        }
        start++
        end--
    }
    return true
}

console.log(isPallindrome([1, 2, 3, 3, 1]))