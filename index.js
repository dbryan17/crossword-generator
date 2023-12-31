// now for generating the crossword
// could also make it a graph...
cw = [
  [[""], [""], [""], [""]],
  [[""], [""], [""], [""]],
  [[""], [""], [""], [""]],
  [[""], [""], [""], [""]],
];

console.log(trie);

let currTrie = trie;
for (let rowIdx = 0; rowIdx < cw.length; rowIdx++) {
  currTrie = trie;
  for (let colIdx = 0; colIdx < cw[rowIdx].length; colIdx++) {
    // want to place the "first" key, then save the value
    // prob want to check if its empty first
    // will also want to check if there is stuff left there
    let key = Object.keys(currTrie)[0];
    cw[rowIdx][colIdx] = key;
    currTrie = currTrie[key];
  }
}
console.log(cw);

// function placeWord(grid, row, col, words) {
//     if (grid is complete) return true;

//     for (word of words) {
//         if (isValidPlacement(grid, row, col, word)) {
//             place word in grid;
//             if (placeWord(grid, next row/col, words)) return true;
//             remove word from grid; // backtrack
//         }
//     }
//     return false;
// }

// function isValidPlacement(grid, row, col, word) {
//     // Check if word fits and doesn't conflict with existing words
//     // ...
// }
