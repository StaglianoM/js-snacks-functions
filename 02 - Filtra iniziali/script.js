/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function getInitials(nomi, lettera) {
    const iniziali = []; 
    for (let i = 0; i < nomi.length; i++) {
        if (nomi[i].startsWith(lettera)) {
            iniziali.push(nomi[i]); 
        }
    }
    return iniziali; 
}

// Invoca la funzione qui e stampa il risultato in console
const result = getInitials(names, 'A');
console.log(result);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

