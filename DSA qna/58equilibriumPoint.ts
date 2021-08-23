/**Equilibrium Point  */

const equilibriumPoint = (arr: number[]) => {
    let sum: number = 0
    let leftsum: number = 0
    for(let i =0; i < arr.length; i++){
        sum += arr[i]
    }

    for(let i =0; i < arr.length; i++){
        leftsum += arr[i]
        if(leftsum === sum){
            console.log(arr[i])
            return
        }
        sum -= arr[i]
    }
}

equilibriumPoint([2,2, 1, 4])