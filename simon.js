// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// funzione per generare numeri
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);   
}

// funzione per generare dei numeri da stampare
function genNum (quantita){
    let arr = [];

    while(arr.length < quantita){
        let number = getRandomNumber(1,100);
        if( arr.includes(number) == false ) {
            arr.push(number);
        }
    }
    return arr;
}


