const multiply = (...args) => {
    const store = [...args]
    if(store.length === 0){
        return 0
    }else{
        const temp = (...args2) => {
            store.push(...args2)
            if(args2.length === 0){
                return store.reduce((acc, curr) => acc * curr, 1)
            }else{
                return temp
            }
        }
        return temp
    }
}






console.log(multiply(2)(2)())

