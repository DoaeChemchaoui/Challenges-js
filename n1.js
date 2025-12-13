// 1>  Écrivez un programme JavaScript qui imprime « Hello, World ! » sur la console.

	console.log("Hello world");

// 2>  Écrivez un programme JavaScript qui calcule la somme de deux nombres.

    let a = 3;
    let b = 5;
    let sum = a + b;
    console.log("La somme de" + a + "et" + b + "est" + sum);

// 3>Écrivez une fonction JavaScript nommée qui prend un nombre en entrée et renvoie un message indiquant si le nombre est pair ou impair.isEvenOrOdd

function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return number + " is even.";
    } else {
        return number + " is odd.";
    }
}
console.log(isEvenOrOdd(7));

// 4>Écrivez une fonction JavaScript nommée qui prend une chaîne en entrée et retourne la version inversée de la chaîne.reverseString

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
