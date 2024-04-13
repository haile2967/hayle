arrowFunction=0=> {
    console.log("arrow function!!!");
  };
  
  const functionExpression=Function(Fname,lastName),{
    console.log("functionExpression!!"+Fname+''+lastName);
  };
  
  let sum=function(x,y){
    return x+y;
  };
  
  let sum1=x,y => {
    return x+y;
  };
  
  (function()
  {
    console.log("hello world!!!");
  })();
  
  function fun(x){
    function fun2(y){
      return x+y;
    }    
    return fun2;
  }