// ## Svolgimento


// - Chiedo all'utente il numero di km da percorrere con un prompt e lo inserisco all'interno di una variabile const e lo moltiplico per il prezzo fisso del biglietto

const km = (parseInt(prompt("Inserisci il numero di km da percorrere"))) * 0.21

console.log(km)


// - Chiedo all'utente il numero età con un prompt e lo inserisco all'interno di una variabile const

const age = parseInt(prompt("Inserisci ila tua età"))

console.log(age)

// - Imposto una condizione secondo le regole imposte

if (age < 18) {

    console.log(km - (km * 20 / 100))

}

else if (age > 65) {

    console.log(km - (km * 40 / 100))
}

else {

    console.log(km)
}