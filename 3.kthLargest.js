/**
 *
 * @param {Array} nums
 * @param {Number} k
 * @step1 create a function to take input from user.
 * @step2 create two empty objects to store positive and negative value of input array.
 * @step3 run a for of loop on input array and convert into an object
 *  *        check if the element is there in object, if yes then increase the value by 1, if not initialize value 1. This step to be performed
 *        for both if elemment in input array is positive or negative. 
 * @step4 Store key value pair as an objects for both positive and negatve numbers.
 * @step5 check if k>count, if yes then our value lies in negative object. update value of
 *        k by substracting count from it and run a for of loop on negative object and return the -value when k becomes 1 or 0.
 * @step6 if k<=len then our value lies in positive object. run foor loop on positive object from back and return value if k=0 or 1.
 */
var findKthLargest = function(nums, k) {
    let r={};
    let s={};
    let result=0;
    let count=0;
    console.log("nums:",nums.length)
    if(nums.length===1)
    {
        return nums[0];
    }
    else{
        for(let i=0;i<nums.length;i++){
            if(nums[i]>=0){
                if(r.hasOwnProperty(nums[i])===false)
                {
                    r[nums[i]]=1;
                    count++;
                }   
                else{
                    
                    r[nums[i]]=r[nums[i]] + 1;
                    count++;
                }
            }
        }
        for(let i=0;i<nums.length;i++){
            if(nums[i]<0){
                x=(-1*nums[i]);
                if(s.hasOwnProperty(x)===false)
                {
                    s[x]=1;
                }   
                else{
                    
                    s[x]=s[x] + 1;
                }
            }
        }
        let v=0;
        console.log(r);
        console.log(s);
        if(Object.keys(s).length==1 && Object.keys(r).length==0)
        {
            return (-Object.keys(s)[0]);
        }
        else{
            if(k>count)
            {
                k=k-count;
                console.log("r:",Object.keys(r).length);
                console.log("s:",Object.keys(s).length);
                console.log(k);
                for (let i=0;i<=(Object.keys(s).length)-1;i++)
                {   
                    if(k>1)
                         {
                            k-=Object.values(s)[i];
                            //console.log(k);
                         }
                        else if(k==1)
                                {
                                   return (-Object.keys(s)[i]);
                                }
                                if(k<=0)
                                {
                                    return (-Object.keys(s)[i]);
                                }
                                //console.log(k);
                }    
            }      

        }
        
        if(k==1){
            result=Object.keys(r)[(Object.keys(r).length)-1]
            return result;
        }
        else{
            
            if(Object.keys(r).length==1 && Object.keys(s).length==0)
            {
                return Object.keys(r)[0];
            }
            else{
                for (let i=(Object.keys(r).length)-1;i>=0;i--)
                {
                     if(k>1)
                     {
                        k-=Object.values(r)[i];
                        //console.log(k);
                     }
                    else if(k==1) {
                               return Object.keys(r)[i];
                            }
                            if(k<=0)
                            {
                                return Object.keys(r)[i];
                            }
                     }
                
                }
                }
}
};
