/**Count number of sub string recursively */

const countString = (str1: string, str2: string): number => {
    if(str1.length < 0 || str1.length < str2.length){
        return 0
    }

    if(str1.substring(0, str2.length) === str2){
        return countString(str1.substring(str2.length), str2) + 1
    }
    return countString(str1.substring(1), str2)
}

console.log(countString('learnersbucket', 'buc'))