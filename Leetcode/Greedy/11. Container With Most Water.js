//https://www.youtube.com/watch?v=FtrorVKobgw

const maxArea = (height = []) => {
    let area = 0
    let start = 0
    let end = height.length-1
    while(start < end){
        let temp = (end - start)*Math.min(height[start], height[end])
        area = Math.max(area, temp)
        if(height[start] > height[end]){
            end--
        }else{
            start++
        }
    }
    return area
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))