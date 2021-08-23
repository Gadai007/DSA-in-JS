/**Find the maximum sum of products of two arrays. */

const sumArray = (arr1, arr2) => {
    arr1.sort()
    arr2.sort()

    let i = 0
    let sum = 0
    while(i < arr1.length && i < arr2.length){
        sum += arr1[i] * arr2[i]
        i++
    }
    console.log(sum)
}

sumArray([4, 7, 5, 2], [2, 3, 2 ,1])