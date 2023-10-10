function openOrder() {
    TestedApps.Orders.Run();
    
}

function addOrder()
{
    KeywordTests.Test2.Run();

}

function CloseOrder() {
    TestedApps.Orders.Terminate();
}





module.exports.openOrder = openOrder;
module.exports.addOrder = addOrder;
module.exports.CloseOrder = CloseOrder;