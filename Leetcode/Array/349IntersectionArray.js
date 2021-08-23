const intersection = function(nums1, nums2) {
    const filtered = []
  for(let i = 0; i < nums1.length; i++){
    for(let j =0 ; j < nums2.length; j++){
      if(nums1[i] == nums2[j]){
        if(!filtered.includes(nums1[i])){
          filtered.push(nums1[i])
        }
      }
    }
  }
  return filtered
};