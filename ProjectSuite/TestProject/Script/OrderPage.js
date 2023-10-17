class OrderPageClass{
  constructor(){
    this.mainForm = Aliases.Orders.MainForm;
    this.toolbar = Aliases.Orders.MainForm.ToolBar;
    this.createdCustomer = this.mainForm.OrdersView;
  
  }

  newOrderByMainForm(){
    this.mainForm.MainMenu.Click("Orders|New order...");
  }

  openCreatedUser(customerName){
    this.createdCustomer.DblClickItem(customerName);
    
  }
  
  checkOrderAdditionByName(customerName){
    aqObject.CheckProperty( this.createdCustomer, `wItem("${customerName}", 0)`, cmpEqual, customerName);
}
  
}
var orderPageClass = new OrderPageClass();

module.exports.orderPageClass = orderPageClass;