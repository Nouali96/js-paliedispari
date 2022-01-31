// Input
const parola = prompt('Inserisci una parola: ');

// Chiama la funzione
const value = checkPalindrome(parola);

//funzione
function checkPalindrome() {

    // length 
    const len = parola.length;

    // loop 
    for (let i = 0; i < len / 2; i++) {

        // controllo
        if (parola[i] !== parola[len - 1 - i]) {
            return 'Non è palindromo';
        }
    }
    return 'è un palindromo';
}


console.log(value);