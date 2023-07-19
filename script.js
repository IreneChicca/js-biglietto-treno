// ## Svolgimento


// - Chiedo all'utente il numero di km da percorrere con un prompt e lo inserisco all'interno di una variabile const e lo moltiplico per il prezzo fisso del biglietto

const km = (parseInt(prompt("Inserisci il numero di km da percorrere"))) * 0.21



// - Chiedo all'utente il numero età con un prompt e lo inserisco all'interno di una variabile const

const age = parseInt(prompt("Inserisci ila tua età"))


// - Imposto una condizione secondo le regole imposte

if (age < 18) {


    document.getElementById("price").innerHTML = "Il prezzo del tuo biglietto è di " + ((km - (km * 20 / 100)).toFixed(2)) + " €"

}

else if (age > 65) {

    document.getElementById("price").innerHTML = "Il prezzo del tuo biglietto è di " + ((km - (km * 40 / 100)).toFixed(2)) + " €"

}

else {

    document.getElementById("price").innerHTML = "Il prezzo del tuo biglietto è di " + (km) + " €"

}