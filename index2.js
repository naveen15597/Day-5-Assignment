// 2. Solution for Links provied in the document.

// 1.Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.

// Input:
// addFive(5);
// addFive(0);
// addFive(-5);
// Output:
// 10
// 5
// 0

var num = 10;
function addFive(num) { 
    return num+5;
}
var result = addFive(num);
console.log(result);

// 2.Write a function called “getOpposite”.
// Given a number, return its opposite
// Input:
// getOpposite(5);
// getOpposite(0);
// getOpposite(-5);
// getOpposite(“5a”);
// getOpposite(5.5);
// Output:
// -5
// 0
// 5
// -1
// -1

var num = 10;
function getOpposite(num) {
    if(Number.isInteger(num))
    {
        return num- (num*2);
    }
}
console.log('opposite',getOpposite(num));

// 3.Fill in your code that takes an number minutes and converts it to seconds.
// Examples
// toSeconds(5) ➞ 300
// toSeconds(3) ➞ 180
// toSeconds(2) ➞ 120
var min = 5;
function toSeconds(min) {
    return min*60;
}
var secs = toSeconds(min)
console.log(secs);

// 4.Create a function that takes a string and returns it as an integer.
// Examples
// toInteger(“6”) ➞ 6
// toInteger(“1000”) ➞ 1000
// toInteger(“12”) ➞ 12
var mystr = "5";
function toInteger(mystr) {
    return +mystr;
}
var myint = toInteger(mystr);
console.log(myint);

// 5.Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// Examples
// nextNumber(0) ➞ 1
// nextNumber(9) ➞ 10
// nextNumber(-3) ➞ -2
var myint = -2;
function nextNumber(myint) {
    return myint+1;
}
var myNextint = nextNumber(myint);
console.log(myNextint);

// 6.Create a function that takes an array and returns the first element.
// Examples
// getFirstElement([1, 2, 3]) ➞ 1
// getFirstElement([80, 5, 100]) ➞ 80
// getFirstElement([-500, 0, 50]) ➞ -500
var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr);
console.log(data);

// 7.Convert Hours into Seconds
// Write a function that converts hours into seconds.
// Examples
// hourToSeconds(2) ➞ 7200
// hourToSeconds(10) ➞ 36000
// hourToSeconds(24) ➞ 86400
var arr = [1, 2, 3];
function hourToSeconds(arr) {
    let str="";
    for(i of arr)
    {
        str+=i*60*60+" "
    }
    return str;
}
var dt = hourToSeconds(arr);
console.log(dt);

// 8.Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.
// Examples
// findPerimeter(6, 7) ➞ 26
// findPerimeter(20, 10) ➞ 60
// findPerimeter(2, 9) ➞ 22
function findPerimeter(num1,num2) {
    return 2*(num1+num2);
}
var peri = findPerimeter(6,7);
console.log(peri);

// 9.Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117
function lessThan100(num1,num2) {
    return num1+num2<100 ? true :false;
}
var res = lessThan100(22,15);
console.log(res);

// 10.There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// Examples
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0
function remainder(num1,num2) {
    return num1%num2;
}
var res = remainder(1,3);
console.log(res);

// 11.Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
// Examples
// CountAnimals(2, 3, 5) ➞ 36
// CountAnimals(1, 2, 3) ➞ 22
// CountAnimals(5, 2, 8) ➞ 50
function CountAnimals(tur,horse,pigs) {
    return (tur*2)+ (horse*4)+ (pigs*4);
}
var legs = CountAnimals(2,3,5);
console.log(legs);

// 12.Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// Examples
// frames(1, 1) ➞ 60
// frames(10, 1) ➞ 600
// frames(10, 25) ➞ 15000
function frames(num1,num2) {
    return (num2*60)*num1;
}
var fps = frames(1,2);
console.log(fps);

// 13.Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
// Examples
// divisibleByFive(5) ➞ true
// divisibleByFive(-55) ➞ true
// divisibleByFive(37) ➞ false
function divisibleByFive(num1) {
    return num1%5==0 ? true : false;
}
var divisible = divisibleByFive(-5);
console.log(divisible);

// 14.Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.

// Input:
// isEven(12);
// isEven(0);
// isEven(11);
// isEven(“11h”);
// Output:
// true
// true
// false
// -1

function isEven(num){
 if(isNaN(num))
    return -1;
return num%2==0 ? true: false;
}
var even = isEven(5);
console.log(even);

// 15.Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

// Input:
// areBothOdd(1, 3);
// areBothOdd(1, 4);
// areBothOdd(2, 3);
// areBothOdd(0, 0);
// Output:
// true
// flase
// flase
// flase
function areBothOdd(num1, num2){ 
    return (num1%2!=0 && num2%2!=0) ? true: false;
}
var oddnOrNot = areBothOdd(5,3);
console.log(oddnOrNot);

// 16.Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

// Input:
// getFullName(“GUVI”, “GEEK”);
// getFullName(“GUVI”, );
// getFullName(, “GEEK”);
// getFullName(“”, “”);
// Output:
// “GUVI GEEK”
// “GUVI”
// “GEEK”
// “”
function getFullName(firstName, lastName){
    return firstName+" "+lastName;
}
console.log(getFullName('GUVI', 'GEEK'));

// 17.Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.
// Input:
// getLengthOfWord(“GUVI”);
// getLengthOfWord(“”);
// getLengthOfWord();
// getLengthOfWord(9);
// Output:
// 4
// 0
// -1
// -1
function getLengthOfWord(word1){
 return word1.length;
}
console.log(getLengthOfWord("Guvi"));

// 18.Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.
// Input:
// isSameLength(“GUVI”, “GEEK”);
// Output:
// true
function isSameLength(word1, word2){
 return word1.length==word2.length;
}
console.log(isSameLength('Guvi','Geek'));

// 19.Create a function to calculate the distance between two points defined by their x, y coordinates
console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
    return Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
}

// 20.Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
// Input:
// getNthElement([1, 3, 5], 1);
// Output:
// 3
function getNthElement(array,n){
    if(array.length>0) 
    {
        return array[n- 1];
    }
    return undefined;
}
console.log(getNthElement([1, 3, 5], 1));

// 21.Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
// Input:
// getLastElement([1, 2, 3, 4]);
// Output:
// 4
function getLastElement(array){
    if(array.length>0) 
    {
        return array[array.length- 1];
    }
    return -1;
}
console.log(getLastElement([1, 2, 3, 4]));

// 22.Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

// var obj = {
// mykey: “value”
// };
// Input:
// getProperty(obj,’mykey’);
// getProperty(obj,’dummykey’);
// Output:
// value
// NA
var obj = {
 mykey: 'value'
};
function getProperty(obj, key) {
 return obj[key];
}
console.log(getProperty(obj,'mykey'));

// 23.Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.

// var obj = {
// }
// Input:
// addProperty(obj, “mykey”);
// Output:
// {
// mykey: true
// }
function addProperty(obj, key){
 obj[key]=true;
}
console.log(addProperty(obj,'newkey'));

// 24.Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.
// Input:
// removeProperty(obj, “name”);
// Output:
// undefined

function removeProperty(obj, key){
    delete obj[key]; 
    // console.log(obj)
}
removeProperty(obj, 'newkey');

// 25.Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    let myArr=[];
    let cnt=0,negSum=0;
    for(let i of arr)
    {
        if(i>=0)
        cnt++;
        else
        negSum+=i;

    } 
    myArr[0]=cnt;
    myArr[1]=negSum;
    return myArr;
}
console.log(ar2(ar));

// 26.Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar)
{
    let myar=[];
    for(let i of ar)
    {
        if(i>=0)
        {
            myar.push(i);
        }
    }
    return myar;
}
var ar1 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar1);
console.log(ar2);

// 27.Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
// n = 0 -> 2⁰ -> [1]
// n = 1 -> 2⁰, 2¹ -> [1,2]
// n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]
// Input:
// powersOfTwo(0)
// powersOfTwo(1)
// powersOfTwo(2)
// Output:
// 1
// 1,2
// 1,2,4
function powersOfTwo(n){
    let res="1";
    let val=1;
    for(let i=1;i<=n;i++)
    {
        val*=2;
        res+=" "+val;
    }
  return res;
}
console.log(powersOfTwo(4));

// 28.Find the maximum number in an array of numbers
function findMax(ar)
{
    let max=0;
    for(let i=0;i<ar.length;i++)
    {
        if(max<ar[i])
            max=ar[i];
    }
    return max;
}
var ar2 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar2);
console.log('Max: ', max);

// 29.Print the first 100 prime numbers
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{ 
 var i1 = 2;
 let str="";
 while(i1 < nPrimes)
 {
    if (isPrime1(i1))
    {
        str+=i1+" ";        
    }
    i1++;
 }
 console.log(str);
}
// Returns true if a number is prime
function isPrime1(n)
{    
    let ctr=0;
    for(let j=2;j<=n;j++)       
    {
        if(n!=j && n%j==0)
        {
            ctr=1;
            // break;
        }
    }
    if(ctr==0)
    {
        return true;
    }        
    return false;    
}
printPrimes(100);

// 30.Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
    let local=1;
    let localMyArray=[];    
    while(local<=nPrimes)
    {
        startAt++;
        if(isPrime(startAt))
        {
            localMyArray.push(startAt);
            local++;
        }
       
    }
    return localMyArray;
 
}
// Returns true if a number is prime
function isPrime(n)
{
    let ctr=0;
    for(let j=2;j<=n;j++)       
    {
        if(n!=j && n%j==0)
        {
            ctr=1;
            // break;
        }
    }
    if(ctr==0)
    {
        return true;
    }        
    return false;   
}

// 31.Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
    let st="";
    for(let i=s.length-1 ;i>=0;i--)   
    {
        st+=s[i];
    }
    return st;
}

// 32.Create a function that will merge two arrays and return the result as a new array
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var arrMerge = mergeArrays(array1, array2);
console.log(arrMerge);
function mergeArrays(ar1, ar2)
{
    let re = [];
    re = ar1;
    for(let el of ar2)
    {
        re.push(el);
    }  
 return re;
}

// 33.Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'));
function sumCSV(s)
{
    let sum=0;
    let localArray=s.split(',');
    console.log(localArray)
    for(let i=0;i<localArray.length;i++)  
    {
        sum+=+localArray[i];
    }
return sum;
}





