const intersection = (nums1 = [], nums2 = []) => {
   nums1.sort((a, b) => a-b)
   nums2.sort((a, b) => a-b)

   let i = 0
   let j = 0
   let result = []
   while(i < nums1.length && j < nums2.length){
       if(nums1[i] < nums2[j]){
           i++
       }else if( nums1[i] > nums2[j]){
           j++
       }else{
           result.push(nums1[i])
           i++
           j++
       }
   }
   return result
}


const reduceIntersection = (nums1 = [], nums2 = []) => {
    const n1 = nums1.reduce((obj, curr) => {
        obj[curr] = obj[curr] + 1 || 1
        return obj
    }, {})

    return nums2.reduce((arr, curr) => {
        if(n1[curr]){
            arr.push(curr)
            n1[curr]--
        }
        return arr
    }, [])
}

console.log(reduceIntersection([1,2,2,1], [2,2]))