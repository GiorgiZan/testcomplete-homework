var comm = require("comm");
var OrderPage = require("OrderPage");
var AddOrderPage = require("AddOrderPage");
var Data = require("Data");


function numberConcatenationTest(){
  var result = comm.SumOfDigitsConcatenation(Data.firstNumber, Data.secondNumber)
  Log.Message("Concatenated sum of digits: " + result);
}

function DatePatternTest(){
  comm.datePattern()
  
}
function fillAndDeleteCustomerNameTest(){
    comm.openOrder()
    OrderPage.orderPageClass.newOrderByMainForm()
    AddOrderPage.addOrderPageClass.fillCustomerNameWithKeyStroke(Data.addedWithKeyStroke)
    AddOrderPage.addOrderPageClass.customerNameCheck(Data.nameAfterShift)
    AddOrderPage.addOrderPageClass.deleteCustomerName()
    AddOrderPage.addOrderPageClass.customerNameCheck(Data.userNameAfterDeletion)
 
    comm.terminateOrder()
}

 function streetCityAndZipFillTest(){
    comm.openOrder()
    OrderPage.orderPageClass.newOrderByMainForm()
    AddOrderPage.addOrderPageClass.checkStreetLabel(Data.streetLableString)
    AddOrderPage.addOrderPageClass.fillStreetField(Data.streetFieldText)
    AddOrderPage.addOrderPageClass.streetFieldCheck(Data.streetFieldText)
    AddOrderPage.addOrderPageClass.fillCityFieldViaStreetField()
    AddOrderPage.addOrderPageClass.fillZipFieldViaStreetField()
    comm.terminateOrder()
}

 function runAllTests(){
   
   numberConcatenationTest()
   DatePatternTest()
   fillAndDeleteCustomerNameTest()
   streetCityAndZipFillTest()

 }
module.exports.runAllTests = runAllTests; 