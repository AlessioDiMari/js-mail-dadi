/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere
(qui quindi dovremmo creare da noi un array di email casuali),
stampa un messaggio appropriato sull’esito del controllo.
(NON utilizzate il metodo .includes())
*/

// Dichiaro il mio array
const emailCasuali = ["alice@gmail.com", "bob@yahoo.com", "charlie@hotmail.com", "dave@example.com", "alessiodimari.com"];

// Dichiaro l'input button
const buttonElement = document.getElementById("button-verify");

// Creo una funzione per verificare che l'email dell'utente
// sia inserita nel mio array al click del button
buttonElement.addEventListener("click",
    function(){
        // Dichiaro l'email dell'utente
        const emailUtente = document.getElementById("user-email").value;
        
        // Dichiaro una variabile booleana
        let elementoPresente = false;

        // Creo un ciclo for per verificare che l'email
        // dell'utente sia uguale almeno ad uno degli
        // elementi del mio array
        for(let i = 0; i < emailCasuali.length; i++){
            if(emailCasuali[i] == emailUtente ){
                elementoPresente = true;                
            }
        };
        console.log(elementoPresente);

    }

)