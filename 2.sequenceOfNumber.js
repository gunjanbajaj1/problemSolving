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