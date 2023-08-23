/*
1. We will create an empty array which will store the open parantheses
2. We will run the loop on the sring if we are getting an open parantheses 
   we will push it into the empty array.
3. If a close parantheses is found we will check whther last element pushed into array is matching 
   open parantheses then we will remove the last elemet array. and if not found will retun false.
4. Post set-p 4 will check the length of array if it 0 then reurn true otherwise false.
*/
var isValid = function(str) {
    let arr=[];
    let count=0;
    result=false;
     if(str[0]==')' || str[0]===']' || str[0]==='}' || ((str.length)%2)!=0)
        {
            return false;
        }
    for(let i=0;i<str.length;i++){
       
        if(str[i]=='(' || str[i]==='{' || str[i]==='[')
        {
            arr.push(str[i]);
            count++;
            console.log(arr);
        }
        else if(str[i]===')')
        {
            if(arr[count-1]==='(')
            {
                arr.pop();
                count--;
            }
            else{
                return false;
            }

        }
        else if(str[i]==='}')
        {
            if(arr[count-1]==='{')
            {
                arr.pop();
                count--;
            }
            else{
                return false;
            }
        }
        else if(str[i]===']')
        {
            if(arr[count-1]==='[')
            {
                arr.pop();
                count--;
            }
            else{
                return false;
            }
        }
    }
    console.log(arr);
    if(arr.length===0)
    {
        return true;
    }
    else{
        return false;
    }
    
}
console.log(isValid('()[{}}]'))
//|| str[i]==='{' || str[i]==='['