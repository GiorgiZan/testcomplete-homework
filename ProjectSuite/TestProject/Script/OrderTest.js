var OrderPage = require("OrderPage");
var AddPageClass = require("AddPageClass");
var Data = require("Data");
var comm = require("comm");

function addingByToolTipTest(){
  comm.openOrder()
  OrderPage.orderPageClass.newOrderByToolTip()
  AddPageClass.addOrderPageClass.fillCustomerName(Data.toolTipAdd)
  AddPageClass.addOrderPageClass.clickOk()
  
  OrderPage.orderPageClass.checkOrderAdditionByName(Data.toolTipAdd)
  comm.terminateOrder()
}

function addingByMainFormTest(){
  comm.openOrder()
  OrderPage.orderPageClass.newOrderByMainForm()
  AddPageClass.addOrderPageClass.fillCustomerName(Data.mainFormAdd)
  AddPageClass.addOrderPageClass.clickOk()
  OrderPage.orderPageClass.checkOrderAdditionByName(Data.mainFormAdd)
  comm.terminateOrder()
}

function checkProductNumberTest(){
   comm.openOrder()
   OrderPage.orderPageClass.newOrderByMainForm()
   AddPageClass.addOrderPageClass.prdouctNumberCheck(Data.expectedProductNumber)
     comm.terminateOrder()
  
}

function addingLettersInQuantityFieldErrorTest(){
   comm.openOrder()
   OrderPage.orderPageClass.newOrderByMainForm()
   AddPageClass.addOrderPageClass.addingLettersInQuantity(Data.lettersForQuantity)
   comm.terminateOrder()
}

function discountAndPriceChangeTest(){
   comm.openOrder()
   OrderPage.orderPageClass.newOrderByMainForm()
   AddPageClass.addOrderPageClass.fillCustomerName(Data.customerName)
   AddPageClass.addOrderPageClass.setPrice(Data.changedPrice)
   AddPageClass.addOrderPageClass.setDiscount(Data.changedDiscount)
   AddPageClass.addOrderPageClass.clickOk()
   OrderPage.orderPageClass.openCreatedUser(Data.customerName)
   AddPageClass.addOrderPageClass.checkPriceAfterSave(Data.changedPrice)
   AddPageClass.addOrderPageClass.checkDiscountAfterSave(Data.changedDiscount)
   comm.terminateOrder()
   
}

function inputtinInvalidDateTest(){
   comm.openOrder()
   OrderPage.orderPageClass.newOrderByMainForm()
   AddPageClass.addOrderPageClass.addingInvalidDate(Data.invalidDate)
   comm.terminateOrder()
}


function runAllTests(){
  addingByToolTipTest();
  addingByMainFormTest();
  checkProductNumberTest();
  addingLettersInQuantityFieldErrorTest();
  discountAndPriceChangeTest();
  inputtinInvalidDateTest();
}
module.exports.runAllTests = runAllTests;