var rangeNumeri = settaDifficolta();
var arrayMineLunghezza =16;
console.log('range e lunghezza impostata');
var arrayMine = creaMine(arrayMineLunghezza, rangeNumeri);
var arrayMieiNumeri = [];
var check = false;
console.log(arrayMine);

while ((arrayMieiNumeri.length <= (100 - arrayMineLunghezza)) && (!check )) {
    var numeroControllato = checkNumero();
    if (arrayMine.includes(numeroControllato)) {
        alert('Hai colpito una mina! GAME OVER! Il tuo punteggio è di: ' + arrayMieiNumeri.length);
        check= true;
}   else if (arrayMieiNumeri.includes(numeroControllato)) {
        alert('Numero già inserito');
}   else {
        arrayMieiNumeri.push(numeroControllato);
        console.log(arrayMieiNumeri);
}
    if (arrayMieiNumeri.length== (100 - arrayMineLunghezza)) {
            alert('HAI COMPLETATO IL GIOCO, HAI VINTO IL TUO PUNTEGGIO E\' ' + arrayMieiNumeri.length);
            check= true;
    }
}

function creaMine (arrayMineLungh, numMax) {
    var arrayMineTemp = [];
    while (arrayMineTemp.length <= arrayMineLungh-1) {
        var numero = numRandom(numMax);
        if (!arrayMineTemp.includes(numero)) {
            arrayMineTemp.push(numero);
        }
    }
    return arrayMineTemp;
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
        if ((!isNaN(numero)) && (numero >0) && (numero<= 100)) {
            check = true;
        } else {
            alert('Non hai inserito un numero corretto');
        }
    } while (!check);
    return numero;
}
