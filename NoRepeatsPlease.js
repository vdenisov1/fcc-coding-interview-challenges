/**
Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
 */

function swap(index1, index2, arr){
    let temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;
}

function generatePermutations(n, arr){
    let permutations = [];

    if(n === 1){
        permutations.push(arr.join(''));
    }else{
        for (let i = 0; i < n - 1; i++) {
            permutations = permutations.concat(generatePermutations(n - 1, arr));

            if (n % 2 === 0) {
                swap(i, n - 1, arr);
            } else {
                swap(0, n - 1, arr);
            }
        }

        permutations = permutations.concat(generatePermutations(n - 1, arr));
    }

    return permutations;
}

function permAlone(str) {
    let chars = str.split('');
    let regex = /(.)\1+/g;
    let permutations = generatePermutations(chars.length, chars);
    let nonRepeating = permutations.filter((val) => {
        if(!val.match(regex))
            return val;
    });
    
    return nonRepeating.length;
}

console.log(permAlone('aab'));