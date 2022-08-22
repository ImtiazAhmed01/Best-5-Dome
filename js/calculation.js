

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

function setText(elementId, elementValue) {
    const getElementId = document.getElementById(elementId);
    getElementId.innerText = elementValue;
}


function allPlayerList() {
    const playerList = document.querySelectorAll('list');
    const playerListLength = playerList.length;
    return playerListLength;
}