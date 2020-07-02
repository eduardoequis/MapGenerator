
let mapToDownload = document.getElementsByClassName("map")[0]

let downloadButton = document.getElementById("download")

downloadButton.addEventListener("click", downloadimage)

console.log("Esperando")
 
//download the node as png. Image (2019-12-01).png
function downloadimage() {   
    
    let scale = 4

    domtoimage.toJpeg(mapToDownload, 
          { quality: 1.0, 
            height: mapToDownload.clientWidth*scale, 
            width: mapToDownload.clientHeight*scale,
            style: {'transform': 'scale('+scale+')',
                    'transform-origin': 'top left'} })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'myMap.jpeg';
        link.href = dataUrl;
        link.click();
    });
        } 