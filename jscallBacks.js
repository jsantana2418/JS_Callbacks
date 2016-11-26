(function(){
  function doSomething(fn, ln, callback){
    console.log("Im going to say something like this! and my callback buddy will be invoked in my function scope body: " + fn + " " + ln + ".");
     callback(); //callback function is invoked here
}
  function personStats(age, weight){
    console.log("Im the callback function that doSomething mentioned about, hi! I'm " + age + " years old and weigh in at " + weight + "lbs.");
}
//callback function is passed into doSomething with arguments
  doSomething("jose", "santana", personStats(31, 185));
})();
