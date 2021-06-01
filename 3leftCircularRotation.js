let ar = [4, 5, 6];

const leftCircularRotation = (ar, k) => {
    for(let i =0; i < k; i++){
        ar.push(ar.shift())
    }
    console.log(ar)
}
