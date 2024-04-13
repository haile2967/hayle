function findMaxValue(num1, num2,num3) {  
    var tempMax;  //local var 
      if (num1 >=  num2) {
          tempMax = num1;
      }
      else {
        tempMax = num2;
      }
      if(num3 >= tempMax) {
          tempMax = num3;
      }
      return tempMax
       
       }
        num1=10;
        num2=4;
        num3=5;
       let z=findMaxValue(num1, num2,num3);
       console.log(z);
  