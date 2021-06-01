/**Minimum characters to delete to make string anagram */

const deleteAnagram = (str1, str2) => {
    let fre = new Array(26)
    fre.fill(0,0,25)
    let count = 0

    for(let i = 0; i < str1.length; i++){
        let ch = str1.charAt(i)
        fre[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    for(let i = 0; i < str2.length; i++){
        let ch = str2.charAt(i)
        fre[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    for(let i =0 ; i < fre.length ; i++){
        if(fre[i] === 1){
            count++
        }
    }

    console.log(count)
}

deleteAnagram('ghj', 'jhk')