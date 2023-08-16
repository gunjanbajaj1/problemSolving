//Algorithm

/*
1. 1st Loop for checking the 1st variable 
2. Compare it with coming element if it is same then leave it other wise swap the variable and break the second loop
3. Continue this process till the end of array
*/

function sequence1(arr){
    for(let i=0;i<arr.length;i++){
        for(let j= i+1;j<arr.length;j++){
            if(arr[i]!=arr[j])
            {
                let temp;
                temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
                break;
            }
        }   
    }
    return arr;
}
console.log(sequence1([1,1,0,0,1,0,1]));


function sequence2(arr){
    let x=arr.length-1;
    for(let i=0;i<arr.length;i++){
            if(x!=arr[i+1])
            {
                let temp;
                temp=arr[i+1];
                arr[i+1]=arr[i];
                arr[i]=temp;
                break;
            }
        }   
    return arr;
}
console.log(sequence2([1,1,0,0,1,0,1]));