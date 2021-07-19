var logOne = setTimeout(function() {
    console.log("one!");
   }, 
   Math.random() * 1000);

var logTwo = setTimeout(function() {
    console.log("two!");
   }, 
   Math.random() * 1000);
   inOrder(logOne, logTwo);
   
   function inOrder(callBack1, callBack2)
   {
        callBack1();
        callBack2();
   }