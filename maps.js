// Map generator. 

function gridGenerator (map, number_of_columns, number_of_rows) {

    map.classList.add(`grid-cols-${number_of_columns}`) // Create columns.

    createPixels (number_of_columns, number_of_rows) // Fill with "pixels"

    columns = number_of_columns
    rows = number_of_rows

}

function createPixels (number_of_columns, number_of_rows) {
  
    let howMany = number_of_columns * number_of_rows 
    let squareSize = 16
  
    if (number_of_rows >17) {
      squareSize = 6
    } else if (number_of_rows >13) {
      squareSize = 8
    } else if (number_of_columns >17 || number_of_rows >11 ) {
      squareSize = 10
    } else if (number_of_columns >13 || number_of_rows >8) {
      squareSize = 12
    }
   
    for (i= 0; i < howMany; i++) {
      let pixel = `<div class="square w-${squareSize} h-${squareSize} border-b border-r pixel${i} bg-empty border-black border-opacity-25"></div>`
      map.insertAdjacentHTML('beforeend', pixel)
    }
}


function newMap() {

    let newMap_colums = document.getElementById("columns").value
    let newMap_rows = document.getElementById("rows").value
    cleanMap()
    gridGenerator (map, newMap_colums, newMap_rows)
    toggleModal()

}

function cleanMap () {
    map.innerHTML = ``
    map.classList.remove(`grid-cols-${columns}`)
}

// AutoSave

map.addEventListener("mouseup", autoSave) 

function autoSave () {
    localStorage.setItem("currentMap", map.innerHTML)
    localStorage.setItem("currentColumns", columns)
}

function loadMap () {
    let mapLoaded = localStorage.getItem("currentMap")
    let columnsLoades = localStorage.getItem("currentColumns")
    map.classList.add(`grid-cols-${columnsLoades}`)
    columns = columnsLoades
    map.innerHTML = mapLoaded
}

loadMap()

//gridGenerator (map, 5, 5)

////// NEW MAP


var openmodal = document.querySelectorAll('.modal-open')
    for (var i = 0; i < openmodal.length; i++) {
      openmodal[i].addEventListener('click', function(event){
    	event.preventDefault()
    	toggleModal()
      })
    }
    
    const overlay = document.querySelector('.modal-overlay')
    overlay.addEventListener('click', toggleModal)
    
    var closemodal = document.querySelectorAll('.modal-close')
    for (var i = 0; i < closemodal.length; i++) {
      closemodal[i].addEventListener('click', toggleModal)
    }

    let acceptButtonModal = document.querySelectorAll('.accept-button')[0]
    acceptButtonModal.addEventListener("click", checkValuesForNewMap)


    function checkValuesForNewMap () {

      let columns = document.getElementById("columns").value
      let rows = document.getElementById("rows").value
      if (columns > 20 || rows > 20) {
         alert("Alert: 20 x 20 maps max.")
      } else {
        newMap()
      }

    }
    
    document.onkeydown = function(evt) {
      evt = evt || window.event
      var isEscape = false
      if ("key" in evt) {
    	isEscape = (evt.key === "Escape" || evt.key === "Esc")
      } else {
    	isEscape = (evt.keyCode === 27)
      }
      if (isEscape && document.body.classList.contains('modal-active')) {
    	toggleModal()
      }
    };
    
    
    function toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('.modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    }
