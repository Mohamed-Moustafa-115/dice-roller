let value = [];
let images=[];

function rollDice() {
    const numOfDices = document.getElementById("numOfDices").value;
    const diceResults = document.getElementById("diceResults");
    const diceImages=document.getElementById("diceImages");

    for (let i = 0; i < numOfDices; i++) {
        value[i] = Math.floor(Math.random() * 6) + 1;
        images[i]=`<img id="dice" src="diceimages/${value[i]}.png">`;
    }
    diceResults.textContent = `${value.join(',')}`;
    diceImages.innerHTML=images.join('');
    value=[];
    images=[];
}