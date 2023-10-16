function openOrder() {
    TestedApps.Orders.Run();
    
}

function terminateOrder() {
    TestedApps.Orders.Terminate();
}





module.exports.openOrder = openOrder;
module.exports.terminateOrder = terminateOrder;

