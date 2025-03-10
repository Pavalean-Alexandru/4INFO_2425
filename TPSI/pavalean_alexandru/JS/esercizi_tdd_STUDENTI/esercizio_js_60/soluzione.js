export function is_anagram(arr) {
    //INSERISCI QUI IL TUO CODICE
    const gruppiParole = arr.reduce((acc, parola) => {
        const chiave = [...parola.toLowerCase()].sort().join('');
        acc.set(chiave, parola);
        return acc;
    }, new Map());

    return [...gruppiParole.values()]
}