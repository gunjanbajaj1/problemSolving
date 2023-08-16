var findKthLargest = function(nums, k) {
    let largest=nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>largest)
        {
            largest=nums[i];
        }
    }
    let r={};
    r[largest]=0;
    for(let i=0;i<nums.length;i++){
        if(r.hasOwnProperty(nums[i])===false)
        {
            r[nums[i]]=1;
        }   
        else{
            
            r[nums[i]]=r[nums[i]] + 1;
        }
    }
    console.log(r);
}
findKthLargest([3,2,1,5,6,4,4],2);