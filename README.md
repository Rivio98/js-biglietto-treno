Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Ricordatevi di fare il file README.md in cui scomponete il problema in sotto problemi
Numero minimo di push: 6
Buon pranzo a dopo.


1. creo una costante per i km  che l'utente deve fare, ai quali assegno il valore restituito da un prompt

2. creo una costante per l'età dell'utente , al quale assegno il valore restituito da un prompt

3. creo una costante per il prezzo del biglietto  (con formula km * 0.21) ai quali assegno il valore

4. creao una variabile a sconto= 0:
se L'utente è ha meno di 18 anni avrà diritto a sconto = 20%
se l'utente è over 65 avrà diritto a sconto = 40%

5. creo una costante prezzo finale al quale assegno valore : prezzo biglietto - (prezzo biglietto * sconto età / 100)

6. innesto il prezzo finale nell' HTML


