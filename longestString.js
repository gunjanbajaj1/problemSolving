function longestString(str)
{
    let arr=str.split(" ");
    output=arr[0];
    for(let i=1;i<arr.length;i++)
    {
        if(output.length < arr[i].length)
        {
            output=arr[i];
        }
    }
    return output;
}
console.log(longestString("Helloa my name is Gunjan Bajaja"));