function namedFunction(){
    console.log("named function!");
} 
namedFunction();
 //arrow function
 arrowFunction=()=> {
     console.log("arrow function!!!");
 } 
 
 arrowFunction();
 //expression function
 const functionExpression=Function(Fname,lastName),{
    console.log("functionExpression!!"+Fname+''+lastName);
 }
 functionExpression("sara","abebe");
 //callbackfunction
 function display(result){
     console.log(result);
 }
 function add(a,b,
    callbackFunction){
       const result=a+b;
        callbackFunction(result);
    }
    add(3,4,display);
    //anonymus function
    let sum=function(x,y){
        return x+y;
    }
    console.log(sum(6,4));
    //6 anonymus function
    let sum1=(x,y) => {
        return x+y;
    }
    console.log(sum1(6,6));
    //7 anonymus function (IIFE)
    (function()
    {
        console.log("hello world!!!");
    })()
    8.//function return
    function fun(x){
        function fun2(y){
            return x+y;
        }    
        return fun2;
    }
    console.log(fun(3)(4));