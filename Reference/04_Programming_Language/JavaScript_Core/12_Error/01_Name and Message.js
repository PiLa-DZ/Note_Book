// In this example we have written "alert" as "adddlert" to deliberately produce an error.
// Return the error name and a description of the error:
try {
  adddlert("Welcome");
}
catch(err) {
  console.log(err.name, err.message);
} 
//: ReferenceError adddlert is not defined
