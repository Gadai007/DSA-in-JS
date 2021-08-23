/**Learn how to shuffle an array in javascript */

const shuffleArray = (arr: number[]) => {
    let currentIndex = arr.length

    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * currentIndex)

        currentIndex -= 1
        
        let temp = arr[randomIndex]
        arr[randomIndex] = arr[currentIndex]
        arr[currentIndex] = temp
    }

    console.log(arr)

}

shuffleArray([1, 23, 15, 3, 99])