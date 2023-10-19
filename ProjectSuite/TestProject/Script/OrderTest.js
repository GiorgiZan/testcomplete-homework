var comm = require("comm");
var OrderPage = require("OrderPage");
var AddOrderPage = require("AddOrderPage");
var Data = require("Data");


 
function radioButtonsTest(){
  comm.openOrder()
  OrderPage.orderPageClass.newOrderByMainForm()
  AddOrderPage.addOrderPageClass.checkRadioButtonQuantity(Data.expectedRadioButtonsNumber)
  AddOrderPage.addOrderPageClass.clickOk()
  comm.terminateOrder()
}
 
 
 
 function generateAndShowCardNoTest(){
    comm.openOrder()
    OrderPage.orderPageClass.newOrderByMainForm()
    AddOrderPage.addOrderPageClass.fillCustomerName(Data.customerName)
    AddOrderPage.addOrderPageClass.fillCardNo(comm.generateRandomNumber())
    AddOrderPage.addOrderPageClass.printCopiedCardNoValueWithKeystrokes()
    AddOrderPage.addOrderPageClass.clickOk()
    OrderPage.orderPageClass.openCreatedUser(Data.customerName)
    AddOrderPage.addOrderPageClass.fillCardNo(comm.generateRandomNumber())
    AddOrderPage.addOrderPageClass.clickOk()
    OrderPage.orderPageClass.openCreatedUser(Data.customerName)
    AddOrderPage.addOrderPageClass.checkingIfCardNoHasBeenRedacted()
    comm.terminateOrder()
}



 
 function setKeyFromActivityTest()
 {
    comm.openOrder()
    OrderPage.orderPageClass.newOrderByMainForm()
    AddOrderPage.addOrderPageClass.fillCardNo(comm.getRequest(Data.activityLink).key)
    AddOrderPage.addOrderPageClass.clickOk()
    comm.terminateOrder()
 }
 
  
 function setActivityyFromMusicTypeTest()
 {
    comm.openOrder()
    OrderPage.orderPageClass.newOrderByMainForm()
    AddOrderPage.addOrderPageClass.fillCustomerName(comm.getRequest(aqString.Concat(Data.activityLink, Data.typeMusic)).activity);
    AddOrderPage.addOrderPageClass.clickOk()
    comm.terminateOrder()
 }
 
 
  function runAllTests(){
   radioButtonsTest()
   generateAndShowCardNoTest()
   setKeyFromActivityTest()
   setActivityyFromMusicTypeTest()

 }


 
module.exports.runAllTests = runAllTests;