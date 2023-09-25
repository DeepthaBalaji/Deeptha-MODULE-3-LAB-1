function displayVar() {
    var localLevelVariable = "Local Level";
    // This is a local level variable
  
    console.log(localLevelVariable);
  
  }
  
  displayVar(); // Prints "Local Level"
  console.log(localLevelVariable);
  // ReferenceError: localLevelVariable is not defined