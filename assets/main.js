/* Il programma dovrà chiedere all'utente il numero di chilometri 
che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale
del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

let numeroKilometri = parseFloat(prompt("Quanti chilometri devi fare?"));

let eta = parseInt(prompt("Quanti anni hai?"));

const prezzoAlKm = 0.21;

let prezzo = numeroKilometri * prezzoAlKm;

console.log (prezzo.toFixed(2))

if (eta < 18){
     prezzo = prezzo * 0.80
     document.writeln(`il prezzo del biglietto per i minorenni è: ${prezzo.toFixed(2)}€`)

} else if (eta > 65){
     prezzo = prezzo * 0.60
     document.writeln(`il prezzo del biglietto per gli over 65 è: ${prezzo.toFixed(2)}€`)

} else {
     document.writeln(`il prezzo del biglietto è ${prezzo.toFixed(2)}€`)

}

