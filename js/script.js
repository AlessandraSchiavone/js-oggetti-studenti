// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    nome : "Alessandra Noemi",
    cognome: "Schiavone",
    eta: 23,
}
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for(var key in studente){
    console.log(key + ":" + studente[key]);
}
// Creare un array di oggetti di studenti.
var studenti = [
    {
        nome : "Alessandra Noemi",
        cognome: "Schiavone",
        eta: 23,
    },
    {
        nome : "Enzo",
        cognome: "Renetti",
        eta: 23,
    },
    {
        nome : "Marco",
        cognome: "Rossi",
        eta: 25,
    },
    {
        nome : "Luca",
        cognome: "Bianco",
        eta: 26,
    }
    
];
console.log(studenti);
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for( i=0; i < studenti.length;i++){
    console.log("Nome: "+ studenti[i].nome + "\nCognome: "+ studenti[i].cognome );
}
// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.
nuovoStudente = {
    nome : prompt('Inserisci il nome:'),
    cognome: prompt('Inserisci il cognome:'),
    eta: parseInt(prompt('Inserisci l\'età:'))
};
studenti.push(nuovoStudente);
console.log(studenti);