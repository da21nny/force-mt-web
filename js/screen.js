/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function generate () {
  var time = new Date()
  document.getElementById('hora').innerHTML = time
  console.log(time)
  var image = new Image()
  image.crossOrigin = 'anonymous'
  html2canvas(document.getElementById('capture')).then(canvas => {
    image = canvas.toDataURL('image/png')
      .replace('image/png', 'image/octec-stream')
    canvas.toBlob(function (blob) {
      saveAs(blob, 'myScreenshot.png')
    })
    console.log(image)
    window.location.href = image
  })
}
