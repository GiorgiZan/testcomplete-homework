var Data = require("Data");
function openOrder() {
    TestedApps.Orders.Run();
    
}

function terminateOrder() {
    TestedApps.Orders.Terminate();
}


 

function generateRandomNumber() {
  return Math.floor(Math.random() * 10000000000);
  
}

function returnCopiedValue(){
  return Sys.Clipboard
}

function getRequest(link)
{
  var request = aqHttp.CreateGetRequest(link);
  var response =  request.Send();
  
  var jsonResponse = JSON.parse(response)
  return jsonResponse

}


module.exports.openOrder = openOrder;
module.exports.terminateOrder = terminateOrder;
module.exports.generateRandomNumber = generateRandomNumber;
module.exports.returnCopiedValue = returnCopiedValue;
module.exports.getRequest = getRequest;
 