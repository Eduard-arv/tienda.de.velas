function chageBackgroundColor () { 
const backgroundColor = promt("Ingrese un color de fondo para la web")
document.body.style.backgroundColor = backgroundColor
}

//chageBackgroundColor() 

function registerBrother () {
    // PASO 1: debemos saber la cantidad de hermanos
    const brotherQuantity = Number(prompt("Ingrese la cantidad de hermanos")) 
    // Paso 2: creamos un arreglo vacio donde vamos agregar los nombres de los hermanos
    const brothers = []
    //Paso 3: crear una variable counter para ir contando la cantidad de veces que ejerce el arreglo


let counter = 0 

// Paso 4: creamos un while usando la condicon de counter < 
while (counter < brotherQuantity) {
    const brotherName = prompt("Ingresa el nombre de tu hermano " + counter)
    brotherName.push(brotherName)
    counter++
    }

}

function generateBlocks () {
    const blocksNumber = Number( 
    prompt("Ingrese la cantidad de bloques que desea dibujar")
    )

    let counter = 0

    while(counter < blocksNumber) {
        // Para poder crear un HTML desde JS podemos usar la funcion "createElement"
        const newDiv = document.createElement("div") 
        // para que este div aparezca, debo agregarlo al body
        newDiv.style.width = "100px"
        newDiv.style.height = "100px"
        newDiv.style.backgroundColor =  blue 
        document.body.appendChild(newDiv)
        counter++
    }
}
