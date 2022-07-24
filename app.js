function retourneLaPhrase(str) {

    const strSplit = str.split("");

    const strReverse = strSplit.reverse();

    const strJoin = strReverse.join(" ");
    
    return strJoin;

}

console.log(retourneLaPhrase("Sonvico tom"));


// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui va retourner une phrase. 
// par exemple : "Bonjour à tous" donnera "suot à ruojnoB"
// Bonne chance.







