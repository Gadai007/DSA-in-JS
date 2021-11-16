//https://www.youtube.com/watch?v=jyHI_53C_E0

const maxUnit = (boxTypes = [[]], truckSize) => {
    boxTypes.sort((a,b) => b[1] - a[1])
    let maxUnitBox = 0
    for(let box of boxTypes){
        if(truckSize < box[0]){
            return maxUnitBox + truckSize * box[1]
        }
        maxUnitBox += box[0] * box[1]
        truckSize -= box[0]
    }
    return maxUnitBox
}

console.log(maxUnit([[1,3],[2,2],[3,1]], 4))