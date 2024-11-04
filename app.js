function changeBackgroundColor() {
    const backgroundColor = prompt("Ingrese un color de fondo para la web");
    document.body.style.backgroundColor = backgroundColor;
}

changeBackgroundColor();

function registerBrother() {
    const brotherQuantity = Number(prompt("Ingrese la cantidad de hermanos"));
    const brother = [];
    let counter = 0;

    while (counter < brotherQuantity) {
        const brotherName = prompt("Ingresa el nombre de tu hermano " + counter);
        brother.push(brotherName);
        counter++;
    }
    console.log(brother);
}

function generarColorHex() {
    const caracteres = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += caracteres[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateBlocks() {
    const blocksNumber = Number(prompt("Ingrese la cantidad de bloques que desea dibujar"));
    let counter = 0;

    while(counter < blocksNumber) {
        const newDiv = document.createElement("div");
        document.querySelector("main").appendChild(newDiv);
        counter++;
        newDiv.style.width = "100px";
        newDiv.style.height = "100px";
        newDiv.style.backgroundColor = generarColorHex();
    }
}

function playGame() {
    const choices = ['piedra', 'papel', 'tijera'];
    const userChoice = prompt("Escribe tu elección: piedra, papel o tijera").toLowerCase();
    
    if (!choices.includes(userChoice)) {
        document.getElementById("result").innerText = "Opción inválida. Por favor, elige piedra, papel o tijera.";
        return;
    }
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result;
    if (userChoice === computerChoice) {
        result = "¡Empate! Ambos eligieron " + userChoice;
    } else if (
        (userChoice === 'piedra' && computerChoice === 'tijera') ||
        (userChoice === 'papel' && computerChoice === 'piedra') ||
        (userChoice === 'tijera' && computerChoice === 'papel')
    ) {
        result = "¡Ganaste! " + userChoice + " vence a " + computerChoice;
    } else {
        result = "¡Perdiste! " + computerChoice + " vence a " + userChoice;
    }
    
    document.getElementById("result").innerText = result;
}