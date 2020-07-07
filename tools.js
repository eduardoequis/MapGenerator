let map = document.getElementsByClassName("map")[0]
let pallet = document.getElementsByClassName("pallet")[0]
let palletOptions = document.getElementsByClassName("option")
let tools = document.getElementsByClassName("tool")

let selected_bg 
let toolSelected = "pencil" // Can be "pencil", "bucket" and "eraser". Pencil is default.

// 12 columnas max
let columns = 0
let rows = 0

// maps


// Event Listeners.

let mouseDown = false
map.addEventListener("mousedown", ()=> {mouseDown = true}) 
map.addEventListener("mouseup", ()=> {mouseDown = false}) 
map.addEventListener("mousedown", changePixelBG) 
map.addEventListener("mousemove", changePixelBG) 


for (i = 0; i < palletOptions.length; i++) {
    palletOptions[i].addEventListener("click", selectedPallet)
}

for (i = 0; i < tools.length; i++) {
    tools[i].addEventListener("click", selectTool)
}



function changePixelBG (e) {

if(mouseDown){
 
    if(toolSelected === "pencil") {

        if (selected_bg !== undefined) {
            let bgToRemove = findBgValue(e.target)
            e.target.classList.toggle(bgToRemove)
            e.target.classList.toggle(selected_bg)
        }

    }

    if(toolSelected === "eraser") {

        let bgToRemove = findBgValue(e.target)
        e.target.classList.toggle(bgToRemove)
        e.target.classList.toggle("bg-empty")
       
        
    }

    if(toolSelected === "bucket") {
       
        if (selected_bg !== undefined) {
        let bgToChange = findBgValue(e.target)
        let allPixelsToChange = map.querySelectorAll(`.${bgToChange}`) 

        for (i = 0; i < allPixelsToChange.length; i++) {
            allPixelsToChange[i].classList.toggle(bgToChange)
            allPixelsToChange[i].classList.toggle(selected_bg)
        }
        }
    }
}

}

function selectedPallet (e) {  
    cleanAllPalletsSelected()  
    e.target.classList.remove("border")
    e.target.classList.add("selectedPallet")
    selected_bg = findBgValue(e.target)    
}

function cleanAllPalletsSelected () {
    for (i = 0; i < palletOptions.length; i++) {
        palletOptions[i].classList.remove("selectedPallet")
        palletOptions[i].classList.add("border")
    }
}

function findBgValue (div) {
    let classList = [...div.classList]
    return classList.filter(s => s.includes('bg-')) // Only can be 1 "bg"
}

function selectTool (e) {

    cleanAllToolsSelected()
    // ON
    e.currentTarget.classList.remove("inactive")
    e.currentTarget.classList.add("active")
    toolSelected = e.currentTarget.id 

}

function cleanAllToolsSelected () {
    for (i = 0; i < tools.length; i++) {    
        tools[i].classList.add("inactive")
        tools[i].classList.remove("active")
    }
}

/*
//Know your pixels

Identify pixel by Number.

function identifyPixel (div) {
    let classList = [...div.classList]
    let numberString = classList.filter(s => s.includes('pixel'))
    return parseInt(numberString[0].split("pixel").pop())
}

function returnRightPixel (number) {

    if (number % columns === 0 ) { // columna + 1
        return "none"
    } else {
        return map.querySelector(`.pixel${number}`) 
    }

}

function returnLeftPixel (number) {

    if (number % columns === 0 ) { // columna + 1
        return "none"
    } else {
        return map.querySelector(`.pixel${number-1}`) 
    }

}

function returnUpDownPixel (number) {

    if (number <= -1 || number >= columns*rows ) { 
        return "none"
    } else {
        return map.querySelector(`.pixel${number}`) 
    }

}

function checkTildes (div) {
   
    let thisDiv = div
    let pixelNumber = identifyPixel(thisDiv)
    let div_left = returnLeftPixel(pixelNumber)
    let div_right = returnRightPixel(pixelNumber+1)
    let div_up = returnUpDownPixel(pixelNumber-9) // deberia ser nº de columna
    let div_down = returnUpDownPixel(pixelNumber+9)


}

// entendiendo los lados

// izquierda -1
// derecha +1
// abajo +columna
// arriba -columnas

*/

