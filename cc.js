function namedFunction(): void {
    console.log("named function!");
  }
  
  namedFunction();
  
  function arrowFunction(): void {
    console.log("arrow function!!!");
    return;
  }
  
  arrowFunction();
  
  function functionExpression(Fname: number, lastName: string): void {
    console.log("functionExpression!!" + Fname + '' + lastName);
  }
  
  functionExpression(3 as number, "abebe");
  
  function add(a: number, b: number, callbackfunction: (result: number) => void): void {
    const result = a + b;
    callbackfunction(result);
  }
  
  add(3, 4, (result) => {
    console.log(result);
  });
  
  let sum: (x: number, y: number) => number;
  sum = function (x: number, y: number): number {
    return x + y;
  };
  console.log(sum(6, 4));
  
  let sum1: (x: number, y: number) => number;
  sum1 = function (x: number, y: number): number {
    return x + y;
  };
  console.log(sum1(6, 6));
  
  (function () {
    console.log("hello world!!!");
  })();
  
  function fun(x: number): (y: number) => number {
    function fun2(y: number): number {
      return x + y;
    }
  
    return fun2;
  }
  
  console.log(fun(3)(4));