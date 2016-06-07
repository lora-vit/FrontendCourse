var app = require('../js/app.js');

describe("pow", function() {

  it("pow(2,-4)", function() {
    //prepare 
   var result;
  	// act 
    result = app.pow(2, -4.1);
  	//assert 
    expect(result).toBe(16);
  });

   it("pow (2,0)", function() {
  	//prepare 
    var result;
    console.log("app",app);
  	// act 
    result = app.pow(2, 0);
  	//assert 
    expect(result).toBe(1);
  });
 
  
  it ("pow(-1,0)", function () {
    //prepare
    var result;
    //act
    result = app.pow(-1, 0);
    //assert
    expect(result).not.toBeUndefined();
  });  

  it ("check_access found", function () {
    //prepare
    var mas=['a','b','c','d'];
    var result;
    //act
    result = app.check_access(mas,'b');
    //assert
    expect(result).not.toBeUndefined();
  }); 

 it ("check_access not found", function () {
    //prepare
    var mas=['a','b','c','d'];
    var result;
    //act
    result = app.check_access(mas,'e');
    //assert
    expect(result).toBe(false);
  }); 

  

});