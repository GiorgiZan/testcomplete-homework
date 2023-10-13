var SecondScenarioSteps = require("SecondScenarioSteps");
var Data = require("Data");

function Test1() {
    SecondScenarioSteps.openOrder()
    SecondScenarioSteps.AddOrder(Data.firstAdd);
    SecondScenarioSteps.AddCheckpoint(Data.firstAdd);

    SecondScenarioSteps.AddOrder(Data.secondAdd);
    SecondScenarioSteps.AddCheckpoint(Data.secondAdd);
    
    SecondScenarioSteps.DeleteOrder(Data.firstAdd);
    SecondScenarioSteps.DeleteOrder(Data.secondAdd);
    
    SecondScenarioSteps.orderTerminate();
    
}