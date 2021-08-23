const rotate = (A = '', B = '') => {
    if(A.length !== B.length) return false
    if(A.length == 0 && B.length == 0) return true

    A = A + A
    return A.includes(B)
}

console.log(rotate("abcde", "cdeab"))