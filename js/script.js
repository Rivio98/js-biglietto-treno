// creo una costante per i km  che l'utente deve fare, ai quali assegno il valore restituito da un prompt
const km = prompt('Quanti km devi percorrere?')

//  creo una costante per l'età dell'utente , al quale assegno il valore restituito da un prompt
const age = prompt('Quanti anni hai?')

//creo una costante per il prezzo del biglietto  (con formula km * 0.21) ai quali assegno il valore
const fullPrice = km * 0.21

//creo una variabile a sconto= 0:
let discount = 0;

//if var

if (age < 18) {
    discount = 20;
} else if (age > 65) {
    discount = 40;
}

//creo una costante prezzo finale al quale assegno valore : prezzo biglietto - (prezzo biglietto * sconto età / 100)
const discountPrice = fullPrice - (fullPrice * discount / 100);

//innesto il prezzo finale nell' HTML
document.getElementById('priceTicket').innerHTML = discountPrice.toFixed(2) + ' ' + '&euro;'