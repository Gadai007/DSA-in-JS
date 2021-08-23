//Input
let objectArray = [
    {
        skill : ["HTML", "CSS", "JS"]
    },
    {
        skill: ["Reactjs", "Nodejs", "git", "HTML"]
    },
    {
        skill: ["figma", "adobe XD"]
    }
]

//Output and duplicate element is not allowed
let output = ["HTML", "CSS", "JS", "Reactjs", "Nodejs", "git", "figma", "adobe XD"]

const output2 = [...new Set(objectArray.map(item => item.skill).flat())]
console.log(output2)

//Check if one array is a subset of another array

const subArray = (nums1, nums2) => {
    return nums2.every((ele) => {
      return nums1.includes(ele)
    })
  }
