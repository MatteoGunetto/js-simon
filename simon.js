// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// VARIABILI

const numeriEl = document.querySelector(".numeri");
let num = genNum(5);
console.log("Numeri generati: ", num);

// DOM

//creo elemento h2 per print in pagina
let printNum = document.createElement("h2");
printNum.innerHTML = num;
numeriEl.appendChild(printNum);

// dopo 3 secondi i numeri scompaiono grazie alla funzione dichiarata in precedenza
setTimeout(hideNum, 30 * 1000);

// funzione per generare numeri
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);   
}

// FUNZIONI

// funzione per generare dei numeri da stampare
function genNum (quantita){
    let arr = [];

    while(arr.length < quantita){
        let number = getRandomNumber(1,100);
        if( !arr.includes(number)) {
            arr.push(number);
        }
    }
    return arr;
}

//funzione che nasconde i numeri
function hideNum(){
    numeriEl.innerHTML = "";
    setTimeout(inputUtente, 1 * 1000);
}




