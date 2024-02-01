/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere
(qui quindi dovremmo creare da noi un array di email casuali),
stampa un messaggio appropriato sull’esito del controllo.
(NON utilizzate il metodo .includes())
*/


const emailCasuali = ["alice@gmail.com", "bob@yahoo.com", "charlie@hotmail.com", "dave@example.com", "alessiodimari.com"];

for(let i = 0; i < emailCasuali.length; i++){
    console.log(emailCasuali[i]);
}

