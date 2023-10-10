var Steps = require("Steps");

function HelloWorld() {
    Log.Message("Hello World");
}

function orderOpenAddClose(){
  Steps.openOrder();
  Steps.addOrder();
  Steps.CloseOrder();
}