"use strict"

//textbox elements
const numberOfDaysTextBox = document.getElementById("numberOfDaysTextBox");

//Datebox element - not used as of now.
const pickupDateBox = document.getElementById("pickupDateBox");


const electronicTollTagCheckbox = document.getElementById("electronicTollTagCheckbox");
const gpsCheckbox = document.getElementById("gpsCheckbox");
const roadsideAssistanceCheckbox = document.getElementById("roadsideAssistanceCheckbox");


const under25NoRadioButton = document.getElementById("under25NoRadioButton");
const under25YesRadioButton = document.getElementById("under25YesRadioButton");


const carRentalCostSpan = document.getElementById("carRentalCostSpan");
const optionsCostSpan = document.getElementById("optionsCostSpan");
const under25SurchargeCostSpan = document.getElementById("under25SurchargeCostSpan");
const totalDueSpan = document.getElementById("totalDueSpan");

const estimateTotalCostButton = document.getElementById("estimateTotalCostButton");


window.onload = function(){

    estimateTotalCostButton.onclick = onEstimateTotalCostButtonClicked;
}


function onEstimateTotalCostButtonClicked(){

    //element values
    let numOfDays = Number(numberOfDaysTextBox.value);
    let electronicTollTagCheck = electronicTollTagCheckbox.checked;
    let gpsCheck = gpsCheckbox.checked;
    let roadsideAssistanceCheck = roadsideAssistanceCheckbox.checked;

    //I only need to check for one of these realisitcally.
    let under25NoButton = under25NoRadioButton.checked;
    let under25YesButton = under25YesRadioButton.checked;


    let baseRentalCost = 0;
    let surcharge = 0;
    let total = 0;
    let options = 0;
    let totalOptionsCost = 0;

 
    const CAR_RENTAL_RATE = 29.99;


    if(electronicTollTagCheck){
        options += 3.95;
    }
    if(gpsCheck){
        options += 2.95;
    }
    if(roadsideAssistanceCheck){
        options += 2.95;
    }

    baseRentalCost = CAR_RENTAL_RATE * numOfDays;
    totalOptionsCost = options * numOfDays;

    if(under25YesButton){

        surcharge = (baseRentalCost + totalOptionsCost) * .3; 
    }

    total =  baseRentalCost + totalOptionsCost +  surcharge;

    //outputs the results to the document
    carRentalCostSpan.innerHTML = baseRentalCost.toFixed(2);
    optionsCostSpan.innerHTML = totalOptionsCost.toFixed(2);
    under25SurchargeCostSpan.innerHTML = surcharge.toFixed(2);
    totalDueSpan.innerHTML = total.toFixed(2);
}