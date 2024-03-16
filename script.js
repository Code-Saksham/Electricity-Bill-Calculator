function calculateBill() {
   var prev1 = parseFloat(document.getElementById('prev1').value) || 0;
    var current1 = parseFloat(document.getElementById('current1').value) || 0;
    var prev2 = parseFloat(document.getElementById('prev2').value) || 0;
    var current2 = parseFloat(document.getElementById('current2').value) || 0;
    var prev3 = parseFloat(document.getElementById('prev3').value) || 0;
    var current3 = parseFloat(document.getElementById('current3').value) || 0;
    var recharge = parseFloat(document.getElementById('recharge').value) || 0;

   if (isNaN(recharge) || recharge <= 0) {
        alert("Please enter a valid recharge amount.");
        return; // Exit the function
    }

    var totalConsumedUnits = (current1 - prev1) + (current2 - prev2) + (current3 - prev3);
    var pricePerUnit = recharge / totalConsumedUnits || 0;
    
    var bill1 = (current1 - prev1) * pricePerUnit;
    var bill2 = (current2 - prev2) * pricePerUnit;
    var bill3 = (current3 - prev3) * pricePerUnit;
    var totalBill = bill1 + bill2 + bill3;

    var consumed1 = current1 - prev1;
    var consumed2 = current2 - prev2;
    var consumed3 = current3 - prev3;

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "Electricity bill for 1st Floor: Rs " + bill1.toFixed(2) + "<br>";
    resultElement.innerHTML += "Electricity bill for 2nd Floor: Rs " + bill2.toFixed(2) + "<br>";
    resultElement.innerHTML += "Electricity bill for 3rd Floor: Rs " + bill3.toFixed(2) + "<br>";
    resultElement.innerHTML += "Total electricity bill for all floors: Rs " + totalBill.toFixed(2);

    document.getElementById('consumed1').innerHTML = "Units consumed: " + consumed1.toFixed(2);
    document.getElementById('consumed2').innerHTML = "Units consumed: " + consumed2.toFixed(2);
    document.getElementById('consumed3').innerHTML = "Units consumed: " + consumed3.toFixed(2);
}
