/* eslint-disable no-unused-vars */
var intentos = 0
var clon = []
clon[0] = { direccion: './img/clon1.png', mana: 4 }
clon[1] = { direccion: './img/clon2.png', mana: 4 }
clon[2] = { direccion: './img/clon3.png', mana: 4 }
clon[3] = { direccion: './img/clon4.png', mana: 4 }
clon[4] = { direccion: './img/clon5.png', mana: 4 }
clon[5] = { direccion: './img/clon6.png', mana: 6 }
clon[6] = { direccion: './img/clon7.png', mana: 4 }
clon[7] = { direccion: './img/clon8.png', mana: 8 }
clon[8] = { direccion: './img/clon9.png', mana: 5 }
clon[9] = { direccion: './img/clon10.png', mana: 3 }
clon[10] = { direccion: './img/clon11.png', mana: 2 }
clon[11] = { direccion: './img/clon12.png', mana: 5 }
clon[12] = { direccion: './img/clon13.png', mana: 3 }
clon[13] = { direccion: './img/clon14.png', mana: 4 }
clon[14] = { direccion: './img/clon15.png', mana: 5 }
clon[15] = { direccion: './img/clon16.png', mana: 6 }
clon[16] = { direccion: './img/clon17.png', mana: 3 }
clon[17] = { direccion: './img/clon18.png', mana: 2 }
clon[18] = { direccion: './img/clon19.png', mana: 2 }
clon[19] = { direccion: './img/clon20.png', mana: 5 }
clon[20] = { direccion: './img/clon21.png', mana: 3 }
clon[21] = { direccion: './img/clon22.png', mana: 3 }
clon[22] = { direccion: './img/clon23.png', mana: 5 }
clon[23] = { direccion: './img/clon24.png', mana: 6 }
clon[24] = { direccion: './img/clon25.png', mana: 3 }
clon[25] = { direccion: './img/clon26.png', mana: 4 }
clon[26] = { direccion: './img/clon27.png', mana: 4 }
clon[27] = { direccion: './img/clon28.png', mana: 1 }
clon[28] = { direccion: './img/clon29.png', mana: 4 }
clon[29] = { direccion: './img/clon30.png', mana: 4 }
clon[30] = { direccion: './img/clon31.png', mana: 4 }
clon[31] = { direccion: './img/clon32.png', mana: 2 }
clon[32] = { direccion: './img/clon33.png', mana: 3 }
clon[33] = { direccion: './img/clon34.png', mana: 4 }
clon[34] = { direccion: './img/clon35.png', mana: 3 }
clon[35] = { direccion: './img/clon36.png', mana: 3 }
clon[36] = { direccion: './img/clon37.png', mana: 3 }
clon[37] = { direccion: './img/clon38.png', mana: 4 }
clon[38] = { direccion: './img/clon39.png', mana: 2 }
clon[39] = { direccion: './img/clon40.png', mana: 2 }
clon[40] = { direccion: './img/clon41.png', mana: 3 }
clon[41] = { direccion: './img/clon42.png', mana: 3 }
clon[42] = { direccion: './img/clon43.png', mana: 2 }
clon[43] = { direccion: './img/clon44.png', mana: 1 }
clon[44] = { direccion: './img/clon45.png', mana: 2 }

function llamada () {
  //  while(intentos < 1){
  numeroAleatorio()
  nombrePlantilla()
  intentos++
  if (intentos === 1) {
    document.getElementById('clicks').innerHTML = intentos + ' vez'
  } else {
    document.getElementById('clicks').innerHTML = intentos + ' veces'
  }
  //   }
}

function nombrePlantilla () {
  var nombre = document.getElementById('Name').value
  document.getElementById('nombre2').innerHTML = nombre
}

function numeroAleatorio () {
  const cantidadNumeros = 8
  var aux = []
  while (aux.length < cantidadNumeros) {
    var numeroAleatorio = Math.floor(Math.random() * 45) + 1
    var existe = false
    for (var i = 0; i < aux.length; i++) {
      if (aux[i] === numeroAleatorio) {
        existe = true
        break
      }
    }
    if (!existe) {
      aux[aux.length] = numeroAleatorio
    }
  }
  document.getElementById('arrayMessage').innerHTML = aux
  calcularCostoMana(aux)
}

function solouno () {
  var z = Math.floor(Math.random() * 45) + 1
  var png = document.getElementById('imagen0')
  png.src = clon[z - 1].direccion
  console.log(clon[z - 1])
}

function calcularCostoMana (aux2) {
  var x = 0
  var costo = 0
  for (var j = 0; j < 8; j++) {
    x = aux2[j]
    console.log(x)
    var img = document.getElementById('imagen' + j)
    img.src = clon[x - 1].direccion
    console.log(clon[x - 1])
    costo += clon[x - 1].mana
    var promedio = costo / 8
    console.log(promedio)
  }
  document.getElementById('costomana').innerHTML = promedio.toPrecision(2)
}
