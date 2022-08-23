

function inputIntegerValue(elementId) {
    const inputElement = document.getElementById(elementId);
    const inputElementValue = inputElement.value;
    const inputElementValueInteger = parseInt(inputElementValue);

    if (isNaN(inputElementValueInteger) == true || elementId.value == "" || inputElementValue < 0) {
        alert("Please enter a valid number");
    } else {
        return inputElementValueInteger;
    }
}


function innerTextToInteger(textId) {
    const inputId = document.getElementById(textId);
    const inputIdText = inputId.innerText;
    const inputIdTextInteger = parseInt(inputIdText);
    return inputIdTextInteger;
}

function setText(elementId, elementvalue) {
    const getElementId = document.getElementById(elementId);
    getElementId.innerText = elementvalue;
}


function allPlayersList() {
    const liList = document.querySelectorAll('li')
    const liListLength = liList.length
    return liListLength;
}