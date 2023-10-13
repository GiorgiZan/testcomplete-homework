//ესე ჯობია ხო, გარეთ var-ებით, ვიდრე ფუნქციებში მეწეროს let-ებით (როგორც ქვემოთ მაქვს დაკომენტარებული)
var orders = Aliases.Orders;
var mainForm = orders.MainForm;

function openOrder() {
    TestedApps.Orders.Run();
    
}

function AddOrder(customerName) {
//    let orders = Aliases.Orders;
//    let mainForm = orders.MainForm;
    mainForm.MainMenu.Click("Orders|New order...");
    let orderForm = orders.OrderForm;
    let textBox = orderForm.Group.Customer;
    textBox.SetText(customerName);
    let button = orderForm.ButtonOK;
    button.ClickButton();
}

function AddCheckpoint(customerName) {
    aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, `wItem("${customerName}", 0)`, cmpEqual, customerName);
}


function DeleteOrder(customerName) {
 //    let orders = Aliases.Orders;
//    let mainForm = orders.MainForm;
  mainForm.OrdersView.ClickItemR(customerName);
  mainForm.MainMenu.Click("Orders|Delete order");
  orders.dlgConfirmation.btnYes.ClickButton();
}


function orderTerminate() {
    TestedApps.Orders.Terminate();
    
}

module.exports.openOrder = openOrder;
module.exports.AddOrder = AddOrder;
module.exports.AddCheckpoint = AddCheckpoint;
module.exports.DeleteOrder = DeleteOrder; 
module.exports.orderTerminate = orderTerminate;