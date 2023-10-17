var Data = require("Data");
function openOrder() {
    TestedApps.Orders.Run();
    
}

function terminateOrder() {
    TestedApps.Orders.Terminate();
}


function splitTextByComma(text){
  return text.split(', ')
}


function SumOfDigitsConcatenation(num1, num2) {
  if (isNumThreeDigitNumber(num1) && isNumThreeDigitNumber(num2)) {
    var firstNumToStr = aqConvert.VarToStr(num1);
    var secondNumToStr = aqConvert.VarToStr(num2);

    var sumOfDigitsNum1 = 0;
    var sumOfDigitsNum2 = 0;

    for (var i = 0; i < firstNumToStr.length; i++) {
      sumOfDigitsNum1 += parseInt(firstNumToStr[i]);
    }

    for (var i = 0; i < secondNumToStr.length; i++) {
      sumOfDigitsNum2 += parseInt(secondNumToStr[i]);
    }

    var concatenatedSumStr = aqString.Concat(aqConvert.VarToStr(sumOfDigitsNum1), aqConvert.VarToStr(sumOfDigitsNum2));
    var concatenatedSum = parseInt(concatenatedSumStr);

    return concatenatedSum;
  } else {
    throw new Error("Input numbers must be 3-digit numbers.");
  }
}

function isNumThreeDigitNumber(num) {
  return num >= 100 && num <= 999;
}



function datePattern() {
  var todaysDate = aqDateTime.Today();
  var day = aqDateTime.GetDay(todaysDate);
  var month = aqDateTime.GetMonth(todaysDate);
  var year = aqDateTime.GetYear(todaysDate);
 
  var formattedMonth = Data.monthNames[month - 1]; 
  Log.Message("Today is  " + day + " " + formattedMonth + ", " + year);
}

module.exports.openOrder = openOrder;
module.exports.terminateOrder = terminateOrder;
module.exports.splitTextByComma = splitTextByComma;
module.exports.SumOfDigitsConcatenation = SumOfDigitsConcatenation;
module.exports.datePattern = datePattern;