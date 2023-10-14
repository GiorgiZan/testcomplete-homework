
var Assertions = require("Assertions");


class AddOrderPageClass{
  constructor(){
    this.orderForm = Aliases.Orders.OrderForm;
    this.orderFormGroup =  this.orderForm.Group
    this.customerName = this.orderForm.Group.Customer;
    this.addNewOrderClickOkButton = this.orderForm.ButtonOK;
    this.productNumber = this.orderFormGroup.ProductNames;
    this.quantityField = this.orderFormGroup.Quantity;
    this.dateField = this.orderFormGroup.Date;
    this.price = this.orderFormGroup.Price;
    this.discount =  this.orderFormGroup.Discount;
 
    
  }

  fillCustomerName(name){
    this.customerName.Keys(name);
  }


  clickOk(){
    this.addNewOrderClickOkButton.ClickButton();
  }
  
  setPrice(price){
    this.price.SetText(price)
  }
  
  
   setDiscount(discount){
    this.discount.SetText(discount)
  }
  
  
  prdouctNumberCheck(productNumber){
      Assertions.assertEquals(this.productNumber.wItemCount, productNumber)
  }
  
  
  addingLettersInQuantity(quantity){
  try {
   this.quantityField.wValue = quantity
  } catch (error) {
    Log.Error(`inputing text into value field : ${error}`);
  }
    
  }
  
  
  addingInvalidDate(invalidDate) {
  try {
    this.dateField.wDate = invalidDate;
  } catch (error) {
    Log.Error(`inputed Invalid Data : ${error}`);
  }
  }
  
  // ეს ერთადაც შემეძლო დამწერე რადგან ერთად არის დავალებაში მოთხოვნილი მაგრამ უფრო ჩაშლილად დავწერე, ცალცალკე
//  checkDiscountAndPriceAfterSave(price, discount){
//    Assertions.assertEquals(price, this.price.Text);
//    Assertions.assertEquals(discount, this.discount.Text);
// }
   checkPriceAfterSave(price){  
     Assertions.assertEquals(price, this.price.Text); }
    
    
   checkDiscountAfterSave(discount){  
      Assertions.assertEquals(discount, this.discount.Text);

}

}


var addOrderPageClass = new AddOrderPageClass();

module.exports.addOrderPageClass = addOrderPageClass;