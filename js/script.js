var rangeNumeri = settaDifficolta();
var arrayMineLength = 16;
var arrayMine = creaMine(arrayMineLength);
var arrayMieiNumeri = [];
var punteggio = 0;
console.log(arrayMine);

for (var i = 1; i < (100-arrayMineLength) ; i++) {
    var numero = parseInt(prompt('Chiamata #' + i + '. Inserici il numero: '));
    if (arrayMine.includes(numero)) {
        alert('Hai colpito una mina! GAME OVER! Il tuo punteggio è di: ' + punteggio);
        break;
    } else if (arrayMieiNumeri.includes(numero)) {
        alert('Numero già inserito');
        i--;
    } else if (i== (100-arrayMineLength)) {
        alert('HAI COMPLETATO IL GIOCO, HAI VINTO IL TUO PUNTEGGIO E\' ' + punteggio);
    }
     else {
        arrayMieiNumeri.push(numero);
        punteggio += 1;
        console.log(arrayMieiNumeri);
    }
}

function creaMine (arrayMineLength) {
    var i = 1;
    var arrayMineTemp = [];
    while (i <= arrayMineLength) {
        var numero = numRandom(rangeNumeri);
        if (!arrayMineTemp.includes(numero)) {
            arrayMineTemp.push(numero);
            i++;
        }
    }
    return arrayMineTemp;
}

function numRandom(numMax) {
    return Math.floor((Math.random() * numMax) +1);
}

function settaDifficolta () {
    var difficolta = prompt('Ciao! Scegli la difficoltà: Facile, Intermedio e Difficile');
    switch (difficolta) {
        case "facile":
             return 100;
            break;
        case "intermedio":
            return 80;
            break;
        case "difficile":
            return 50;
            break;
        default:
            console.log('Dato incorretto, ricaricare la pagina');
            break;
    }
}
