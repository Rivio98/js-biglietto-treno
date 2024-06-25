// creo una costante per i km  che l'utente deve fare, ai quali assegno il valore restituito da un prompt
const km = prompt('Quanti km devi percorrere?')

//  creo una costante per l'età dell'utente , al quale assegno il valore restituito da un prompt
const age = prompt('Quanti anni hai?')

//creo una costante per il prezzo del biglietto  (con formula km * 0.21) ai quali assegno il valore
const fullPrice = km * 0.21

//creo una variabile a sconto= 0:
let discount = 0;

//if

if (age < 18) {
    discount = 20;
} else if (age > 65) {
    discount = 40;
}