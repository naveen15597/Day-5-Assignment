
// 3.Do the below programs in arrow functions
// a.Print odd numbers in an array
var oddNumbers= (value=>{    
    let str="";
    for(let i=0;i<value.length;i++)
    {
        if(value[i]%2!=0)
        {
            str+=value[i]+" ";
        }
    }
    return str;
});
var arr=[1,2,3,4,5,6,7,8,9];
console.log(oddNumbers(arr));

// b.Convert all the strings to title caps in a string array
var titleString= (value=>{    
    for(let i=0;i<value.length;i++)
    {
        value[i]=value[i].charAt(0).toUpperCase()+value[i].substring(1,value[i].length);
    }
    return value;
});
var strArray=["welcome","to","guvi","geeks"];
console.log(titleString(strArray));

// c.Sum of all numbers in an array
var sumOfArray=(value=>{
    let sum=0;
    for(let i=0;i<value.length;i++)
    {
        sum+=value[i];
    }
    return sum;
});
var sArray=[1,2,3,4,5];
console.log(sumOfArray(sArray));

// d.Return all the prime numbers in an array
var primeNumbers= (value=>{   
    var myArr=[];
    for(let i=0;i<value.length;i++)
    {
        let ctr=0;
        for(let j=2;j<value[i];j++)       
        {
            if(value[i]!=j && value[i]%j==0)
            {
                ctr=1;
            }
        }
        if(ctr==0)
        {
            myArr.push(value[i]);
        }
    }
    return myArr;
});
var pArr=[1,2,3,4,5,6,7,8,9,10,11,12,15,17];
console.log(primeNumbers(pArr));

// e.Return all the palindromes in an array
var palindrome=(value=>{    
    var str="";
    for(let i=0;i<value.length;i++)
    {
        if(value[i]==value[i].split('').reverse().join(''))
        {
            str+=value[i]+" ";
        }        
    }
    return str;
});
var strArray=["welcome","malayalam","madam","geeks",];
console.log(palindrome(strArray));


