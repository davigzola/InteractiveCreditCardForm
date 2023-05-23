var creditCardName = document.querySelector(".credit-card-form-name input[type=text]");
var creditCardNumber = document.querySelector(".credit-card-form-number input[type=text]");
var creditCardExpDateMonth = document.querySelector("#expdate-month");
var creditCardExpDateYear = document.querySelector("#expdate-year");
var creditCardCVC = document.querySelector(".credit-card-form-cvc input[type=text]");

var creditCardForm = document.querySelector(".credit-card-form");
var thankYou = document.querySelector(".thank-you")
var submitButton = document.querySelector("#submit-button");

var frontCardName = document.querySelector(".front-card-name");
var frontCardNumber = document.querySelector(".front-card-number");
var frontCardExpDateMonth = document.querySelector("#front-card-expdate-month");
var frontCardExpDateYear = document.querySelector("#front-card-expdate-year");
var backCardCVC = document.querySelector(".back-card-cvc");

creditCardName.addEventListener("input", changeName);
creditCardNumber.addEventListener("input", changeNumber);
creditCardExpDateMonth.addEventListener("input", changeMonth);
creditCardExpDateYear.addEventListener("input", changeYear);
creditCardCVC.addEventListener("input", changeCVC);
submitButton.addEventListener("click", submitClick);

function changeName() {
    frontCardName.textContent = creditCardName.value;   
}

function changeNumber() {
    frontCardNumber.textContent = creditCardNumber.value;
}

function changeMonth() {
    frontCardExpDateMonth.textContent = creditCardExpDateMonth.value;
}

function changeYear() {
    frontCardExpDateYear.textContent = creditCardExpDateYear.value; 
}

function changeCVC() {
    backCardCVC.textContent = creditCardCVC.value;
}

function submitClick() {
    thankYou.removeAttribute("id");
    creditCardForm.id = "hidden";
}