var comm = require("comm");

var Assertions = require("Assertions");


class AddOrderPageClass{
  constructor(){
    this.orderForm = Aliases.Orders.OrderForm;
    this.orderFormGroup =  this.orderForm.Group
    this.customerName = this.orderFormGroup.Customer;
    this.addNewOrderClickOkButton = this.orderForm.ButtonOK;
    this.streetLabel = this.orderFormGroup.label8
    this.streetField = this.orderFormGroup.Street
    this.cityField = this.orderFormGroup.City
    this.zipField = this.orderFormGroup.Zip
    
  }
 
  
  fillCustomerNameWithKeyStroke(name){
    Sys.Desktop.KeyDown(VK_SHIFT);
    this.customerName.Keys(name);
    Sys.Desktop.KeyUp(VK_SHIFT);
    
  }
  fillStreetField(fieldText){
    this.streetField.Keys(fieldText)
  }

 
  fillCityFieldViaStreetField(){
      var splitedStreetField =  comm.splitTextByComma(this.streetField.wText)
      this.cityField.Keys(splitedStreetField[0])
      
  }
    fillZipFieldViaStreetField(){
      var splitedStreetField =  comm.splitTextByComma(this.streetField.wText)
      this.zipField.Keys(splitedStreetField[splitedStreetField.length - 1])
      
  }
  


  deleteCustomerName(){
      this.customerName.Keys("^a[BS]")
  }
  
  checkStreetLabel(street){
    Assertions.assertEquals(this.streetLabel.WndCaption, street)
  }

  clickOk(){
    this.addNewOrderClickOkButton.ClickButton();
  }
  
   customerNameCheck(name){
      Assertions.assertEquals(this.customerName.wText, name)
  }
   streetFieldCheck(street){
      Assertions.assertEquals(this.streetField.wText, street)
  }
  
 

}


var addOrderPageClass = new AddOrderPageClass();

module.exports.addOrderPageClass = addOrderPageClass;