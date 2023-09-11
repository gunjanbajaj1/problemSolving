
/*Algorithm

1. take an empty array to store the output.
2. 1st loop which will run till the length of input array.
3. Check if the element is an array or not. If it is not an array push the element into output array.
4. If it is an array call the same function with this array is an argument.(recurrsion)
5. return output
*/
output=[];
function flattenArray(arr){
    
    for(let i=0;i<arr.length;i++)
    {
       if(Array.isArray(arr[i]))
       {
         flattenArray(arr[i]);
       }
       else{
        output.push(arr[i]);
        console.log(output);
       }        
    }
    return output;
}
console.log(flattenArray([1,2,3,4,[1,2]]));

//1,2,3,4,[1,2],[3,4,[3,4]],5]