
function assertEquals(actual, expected)
{
  if(actual === expected)
      Log.Message("Equals")
  else
      Log.Error("They do not equal")
      
    
}
module.exports.assertEquals = assertEquals;