var AddPageClass = require("AddPageClass");
var comm = require("comm");
var OrderPage = require("OrderPage");


 
 

function addGlobalByMainFormTest(){
  comm.openOrder();
  OrderPage.orderPageClass.newOrderByMainForm()
  AddPageClass.addOrderPageClass.fillCustomerName(Project.Variables.TempVar)
  AddPageClass.addOrderPageClass.clickOk()
  
  comm.terminateOrder()
}