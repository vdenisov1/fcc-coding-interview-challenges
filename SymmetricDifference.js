/*
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is
the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference
you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both
(C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique values (no duplicates).
*/

function symmetricDifferenceOfTwoArrays(firstArray, secondArray){
    let symmetricDifference = [];
    let i = 0;
    let j = 0;
    let firstArrayUnique = firstArray.sort().filter((val, index, arr) => {
        return arr.indexOf(val) === index;
    });
    let secondArrayUnique = secondArray.sort().filter((val, index, arr) => {
        return arr.indexOf(val) === index;
    });

    while (i < firstArrayUnique.length && j < secondArrayUnique.length) {
        let ithElement = firstArrayUnique[i];
        let jthElement = secondArrayUnique[j];

        if (ithElement < jthElement) {
            symmetricDifference.push(ithElement);
            i++;
        } else if (jthElement < ithElement) {
            symmetricDifference.push(jthElement);
            j++;
        } else {
            j++;
            i++;
        }
    }

    // If any elements are left over add them.
    for (; i < firstArrayUnique.length; i++) {
        symmetricDifference.push(firstArrayUnique[i]);
    }

    for (; j < secondArrayUnique.length; j++) {
        symmetricDifference.push(secondArrayUnique[j]);
    }

    return symmetricDifference;
}


function sym() {
    if(arguments.length > 1){
        let symmetricDifference = arguments[0];
        
        for(let i = 1; i < arguments.length; i++){
            symmetricDifference = symmetricDifferenceOfTwoArrays(symmetricDifference, arguments[i]);
        }

        return symmetricDifference;
    }
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));