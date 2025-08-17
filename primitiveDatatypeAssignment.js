var city="Madurai"
var marks=85
var futureGoal

console.log("I live in " +city)
console.log(typeof city)
console.log(marks + 10)
console.log(typeof marks)
console.log(typeof futureGoal)
let isWeekend =true
if(isWeekend){
      var weekend="Relax"
}
else{
     var weekend="Work"
}
 console.log("Print this weekend is " + weekend)
 console.log(typeof isWeekend)

/**tried using let variables in If Loop -getting error staing ReferenceError: weekend is not defined,because of the let variable scoping limited to block level.so i changed the variable from let to var-am able to successfully run the code without any issues**/

 