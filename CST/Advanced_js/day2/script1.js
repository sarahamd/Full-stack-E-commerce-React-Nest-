var myobj={
  id:"SD-10",
  location:"SV",
  addr:"123 st.",
  getSetGen:function () {
   
    var _this=this;
      for( var i in _this ) { 
        (function (i) { // <-- capture looping variable

          _this[ "get" + i ] = function() {
            return _this[i];
          };
    
          _this[ "set" + i ] = function(val) {
              _this[i] = val;
          };

        })(i); // <-- pass the variable
      }
    }
    
   
   
  }
  myobj.getSetGen()
  console.log(myobj.getid());
  console.log(myobj.getlocation());
  console.log(myobj.getaddr());
  console.log(myobj.setaddr("48-po"));
  console.log(myobj.getaddr());


   var user={
    uname:"ali",
    age:23
   };

myobj.getSetGen.call(user);

console.log(user.getuname()); // Output: ali
console.log(user.getage());//23

console.log(user.setuname("mariam")); 
console.log(user.getuname()); // Output: mariam



