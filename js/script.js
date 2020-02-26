var rangeNumeri = settaDifficolta();
var arrayBombeLunghezza =16;
var arrayBombe = creaBombe(arrayBombeLunghezza, rangeNumeri);
var arrayMieiNumeri = [];
var check = false;
console.log(arrayBombe);

while ((arrayMieiNumeri.length <= (100 - arrayBombeLunghezza)) && (!check )) {
    var numeroControllato = checkNumero();
    if (arrayBombe.includes(numeroControllato)) {
        alert('Hai colpito una Bomba! GAME OVER! Il tuo punteggio è di: ' + arrayMieiNumeri.length);
        check= true;
}   else if (arrayMieiNumeri.includes(numeroControllato)) {
        alert('Numero già inserito');
}   else {
        arrayMieiNumeri.push(numeroControllato);
        console.log(arrayMieiNumeri);
}
    if (arrayMieiNumeri.length == (100 - arrayBombeLunghezza)) {
            alert('HAI COMPLETATO IL GIOCO, HAI VINTO IL TUO PUNTEGGIO E\' ' + arrayMieiNumeri.length);
            check= true;
    }
}

function creaBombe (arrayBombeLungh, numMax) {
    var arrayBombeTemp = [];
    while (arrayBombeTemp.length <= arrayBombeLungh-1) {
        var numero = numRandom(numMax);
        if (!arrayBombeTemp.includes(numero)) {
            arrayBombeTemp.push(numero);
        }
    }
    return arrayBombeTemp;
}

function numRandom(numMax) {
    return Math.floor((Math.random() * numMax) +1);
}

function settaDifficolta () {
    var difficolta = prompt('Ciao! Scegli la difficoltà: Facile, Intermedio e Difficile');
    difficolta = difficolta.toLowerCase();
    switch (difficolta) {
        case "facile":
            return 100;
        case "intermedio":
            return 80;
        case "difficile":
            return 50;
        default:
            console.log('Dato incorretto, ricaricare la pagina');
            break;
    }
}

function checkNumero() {
    var check = false;
    do {
        var numero = parseInt(prompt('Inserici un numero da 1 a 100: '));
        if ((!isNaN(numero)) && (numero > 0) && (numero<= 100)) {
            check = true;
        } else {
            alert('Non hai inserito un numero corretto');
        }
    } while (!check);
    return numero;
}
