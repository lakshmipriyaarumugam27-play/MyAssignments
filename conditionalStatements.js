
//For browser launch messages
let browserName="Safari"
function launchBrowser(browserName){
    if(browserName=="Chrome")
    {
    console.log("Launched browser name is " +browserName)
    }
    else if(browserName=="Edge")
    {
    console.log("Launched browser name is " +browserName)
    }
    else if(browserName=="Firefox")
    {
    console.log("Launched browser name is " +browserName)
    }
    else if(browserName=="Safari")
    {
    console.log("Launched browser name is " +browserName)
    }
    else{
    console.log("Default browser launched")
}
}

launchBrowser(browserName)


//for test type messages
let testType="sanity"
function runTests(testType)
{
switch (testType){
case "smoke":
    console.log("Test type is Smoke Testing")
         break
case "sanity":
    console.log("Test type is Sanity Testing")
         break
case "regression":
    console.log("Test type is Regression Testing")
         break
default:
    console.log("Default Test type is Smoke Testing")

}
}
runTests(testType)

