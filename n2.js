//1> Écrivez une fonction JavaScript nommée qui prend un nombre en entrée et renvoie son factoriel.calculateFactorial
function calculateFactorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * calculateFactorial(n - 1);
}
console.log("The factorial of 5 is " + calculateFactorial(5));
console.log("The factorial of 0 is " + calculateFactorial(0));

// 3>Écrivez une fonction JavaScript nommée qui prend un tableau d’entiers en entrée et retourne un nouveau tableau avec les entiers triés dans l’ordre croissant.sortAscending

function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}
let array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(sortAscending(array));

// 17> Trouver le k-ième plus petit élément dans un tableau non trié
function findKthSmallest(arr, k) {
    arr.sort((a, b) => a - b);
    return arr[k - 1];
}
let arr1 = [7, 10, 4, 3, 20, 15];
let k1 = 3;
console.log(findKthSmallest(arr1, k1));

// 8> Trouver l’intersection de deux réseaux
function findIntersection(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}
let array3=[1, 2, 3, 4, 5];
let array4=[3, 4, 5, 6, 7];
console.log(findIntersection(array3,array4 ));