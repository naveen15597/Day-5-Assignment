//1 Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array
(function oddNumbers(){
    var arr=[1,2,3,4,5,6,7,8,9];
    let str="";
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            str+=arr[i]+" ";
        }
    }
    console.log(str);
})();

// b.Convert all the strings to title caps in a string array
(function titleCaps(){
    var strArray=["welcome","to","guvi","geeks",];
    for(let i=0;i<strArray.length;i++)
    {
        strArray[i]=strArray[i].charAt(0).toUpperCase()+strArray[i].substring(1,strArray[i].length);
    }
    console.log(strArray);
})();

// c.Sum of all numbers in an array
(function titleCaps(){
    var strArray=["welcome","to","guvi","geeks",];
    for(let i=0;i<strArray.length;i++)
    {
        strArray[i]=strArray[i].charAt(0).toUpperCase()+strArray[i].substring(1,strArray[i].length);
    }
    console.log(strArray);
})();

// d.Return all the prime numbers in an array
(function primeNumbers(){
    var arr=[1,2,3,4,5,6,7,8,9,10,11,12,15,17];
    var myArr=[];
    for(let i=0;i<arr.length;i++)
    {
        let ctr=0;
        for(let j=2;j<arr[i];j++)       
        {
            if(arr[i]!=j && arr[i]%j==0)
            {
                ctr=1;
            }
        }
        if(ctr==0)
        {
            myArr.push(arr[i]);
        }
    }
    console.log(myArr);
})();

// e.Return all the palindromes in an array
(function palindromes(){
    var strArray=["welcome","malayalam","madam","geeks",];
    var str="";
    for(let i=0;i<strArray.length;i++)
    {
        if(strArray[i]==strArray[i].split('').reverse().join(''))
        {
            str+=strArray[i]+" ";
        }        
    }
    console.log(str);
})();

// f.Return median of two sorted arrays of same size
(function median(){
    var arr1=[1,2,3,4,5];
    var arr2=[6,7,8,9];
    var newArr=arr1;
    newArr.push(arr2);    
    console.log(newArr[newArr.length/2+1]);
})();

// g.Remove duplicates from an array
(function duplicates(){
    var arr=[1,2,1,2,5,6,7,8,9];    
    for(let i=0;i<arr.length-1;i++)    
    {
        if(arr[i]!=-25)
        {
            for(let j=i+ 1;j<arr.length;j++)
            {
                if(arr[i]==arr[j])
                {
                    arr[j]=-25;
                }
            }
        }        
    }
    let str="";
    for(let i=0;i<arr.length- 1;i++)
    {
        if(arr[i]!=-25)
        {
            str+=arr[i]+" ";
        }
    }
    console.log(arr[arr.length- 1]!=-25 ? str+arr[arr.length- 1] : str);
})();

// h.Rotate an array by k times
(function arrayRotation(){
    var arr=[1,2,3,4,5,6];
    let k=3;
    let n=k%arr.length;
    console.log(arr.join('').substring(arr.length-k,arr.length)+arr.join('').substring(0,arr.length-k));
})();

