
function addToList(element) {

    const playerName = element.parentNode.children[1].innerText;
    const selectedPlayers = document.getElementById('selected-players');
    const createPlayerList = document.createElement('list');
    const liLength = allPlayerList();
    const liNewLength = liLength + 1;

    if (liNewLength > 5) {
        alert("You can only select 5 players")
    } else {
        createPlayerList.innerText = ` ${liNewLength}.  ${playerName}`
        selectedPlayers.appendChild(createPlayerList)

        element.style.backgroundColor = "black"
        element.setAttribute("disabled", "true")
    }
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const liLength = allPlayerList();
    const playersCost = inputIntegerValue('players-cost');
    const playersTotalCost = liLength * playersCost;

    if (isNaN(playersTotalCost) === false) {
        setText('players-totalCost', playersTotalCost)
    }
})



document.getElementById('btn-total-cost').addEventListener('click', function () {
    const playersTotalCost = innerTextToInteger('players-totalCost');
    const managerCost = inputIntegerValue('manager-cost');
    const coachCost = inputIntegerValue('coach-cost');
    const totalCost = playersTotalCost + managerCost + coachCost;

    if (isNaN(totalCost) == false && totalCost > 0) {
        setText("totalcost", totalCost)
    }

})