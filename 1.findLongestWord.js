function findLongestWord(str)
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
console.log(findLongestWord("Helloa my name is Gunjan Bajaja"));
