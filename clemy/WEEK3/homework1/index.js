    //   STEP 3.1
console.log('\nstep 3.1')
function foo(func) {
   console.log( func() + " " + " I don't understand?")
    };
  
    function bar() {
    return ( 'Hello, I am bar!'); //I had to change the code in this line
    };
    foo(bar);


   //   STEP 3.2
    function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
        for (let i = startIndex; i <= stopIndex; i++) {
          numbers.push(i);
        }
    
        numbers.forEach(num => {
          if (num % 3 === 0) {
            threeCallback(num);
          }
          if (num % 5 === 0) {
            fiveCallback(num);
          }
        })
    };

    function sayDivisibleBy(divisor) {
        return function (num) {
          console.log(`${num} is divisible by ${divisor}`);
        }
    };
    
        threeFive(10, 15, sayDivisibleBy(3), sayDivisibleBy(5));

    
        //   STEP 3.3.1
    function repeatStringNumTimes(str, num) {
            let orgStr= ""
            for (let i = 0; i < num ; i++)
          
            orgStr += str
            return orgStr;
    };
        console.log(repeatStringNumTimes("abc", 3));
      
        
        //   STEP 3.3.2
    function repeatStringNumTimes(str, num) {
            let orgStr = "" ;
            while (num > 0){
            orgStr += str
            num--;
          
            }
            return orgStr;
    };
      console.log(repeatStringNumTimes("abc", 3));

        //   STEP 3.3.3
    function repeatStringNumTimes(str, num) {
        let orgStr = "";
        do{
        orgStr += str
        num--;
        }
        while (num > 0);
                
        return orgStr;
    };
        console.log(repeatStringNumTimes("abc", 3));
      
 
    
      //   STEP 3.4
    function Dog(){
        this.name = "Bob";
        this.color = "Dark";
        this.numLegs = 4;
    };
    console.log(Dog);
    function Dog() {
        this.name = "Rupert";
        this.color = "brown";
        this.numLegs = 4;
      };
      let hound = new Dog();


      //   STEP 3.5
    function multiplyAll(arr) {
        let product = 1;
            for (var i = 0; i < arr.length; i++) {
            let innerArray = arr[i];
            for (var j = 0; j < innerArray.length; j++) {
              product *= innerArray[j];
            }
          }
        return product;
    };
      console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));


    //   STEP 3.6
    const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]], [[9, 10], [11, 12]]];
    function printAll(arg) {
        if (Array.isArray(arg)) {
        arg.forEach(elem => printAll(elem));
        } else {
      console.log(arg);
        }
    };
     // This function calls itself recursively
        printAll(arr3d);

    
    // STEP 3.7
    let x = 9;
    function f1(val) {
        val = val + 1;
        return val;
    };
        f1(x);
        console.log(x);
        // function f1 does not change the value of variable x: x is passed by value

    let y = { x: 9 };
    function f2(val) {
        val.x = val.x + 1;
        return val;
    };
        f2(y);
        console.log(y);
        // function f2 changes the value of property y.x: y is passed by reference