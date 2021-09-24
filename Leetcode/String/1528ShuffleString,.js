var restoreString = function(s, arr) {
    let newArr = []
    

    for(let i = 0; i < arr.length; i++){
        newArr[arr[i]] = s[i]
    }
    return newArr.join('')
};