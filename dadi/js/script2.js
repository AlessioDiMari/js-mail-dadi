/*
Generare un numero random da 1 a 6, sia per
il giocatore sia per il computer.
Stabilire il vincitore, in base a chi
fa il punteggio più alto.
*/

// Dichiaro il bottone per tirare i dadi
const buttonElement = document.getElementById("trow-dice");

// Dichiato la funzione al click del bottone
buttonElement.addEventListener("click",
    function(){
        // Genero un numero casuale da 1 a 6 per l'utente
        const casualeUtente = Math.floor(Math.random() * 6 ) + 1;
        
        // Dichiaro il numero uscito all'utente
        document.getElementById("esito-utente").innerText = "All'utente è uscito: " + casualeUtente;

        // Genero un numero casuale da 1 a 6 per il computer
        const casualeComputer = Math.floor(Math.random() * 6) + 1;
        
        // Dichiaro il numero uscito al computer
        document.getElementById("esito-computer").innerText = "Al computer è uscito: " + casualeComputer;


        
    }

)