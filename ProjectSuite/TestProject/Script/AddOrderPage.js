var comm = require("comm");

var Assertions = require("Assertions");

class AddOrderPageClass{
  constructor(){
    this.orderForm = Aliases.Orders.OrderForm;
    this.orderFormGroup =  this.orderForm.Group
    this.addNewOrderClickOkButton = this.orderForm.ButtonOK;
    this.customerName = this.orderFormGroup.Customer;
    this.cardNo = this.orderFormGroup.CardNo
    
  }
  
  fillCustomerName(name){
    this.customerName.Keys(name);
  }
  
   fillCardNo(numbers){
    this.cardNo.Keys(numbers)
  }


  checkRadioButtonQuantity(radioQuantity){
     var radioButtons =  this.orderFormGroup.FindAllChildren("ClrClassName", "RadioButton")
     Assertions.assertEquals(radioButtons.length, radioQuantity);
  }

 
  printCopiedCardNoValueWithKeystrokes(){
    this.cardNo.Keys("^a^c")
    Log.Message("Printing copied generated card number : " + comm.returnCopiedValue())
    
  }
 
 


  clickOk(){
    this.addNewOrderClickOkButton.ClickButton();
  }
  
  
  
  checkingIfCardNoHasBeenRedacted(){
         if (this.cardNo.wText !== comm.returnCopiedValue()) {
        Log.Checkpoint("Card number has been redacted!" );
       } else {
         Log.Error("Redaction failed, card number is the same");
    }
 
  }
 

}


var addOrderPageClass = new AddOrderPageClass();

module.exports.addOrderPageClass = addOrderPageClass;



