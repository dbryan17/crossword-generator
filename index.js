// const {trie} = require("./data/trie")
// const {smalltrie} = require("./data/smalltrie")

// now for generating the crossword
// could also make it a graph...

// TODO think I am editing these vars in place, so don't need to pass anything but row and col
const createCw = (cw, row, col, trie) => {
  if (row === cw.length) {
    // found a poss solution
    return true;
  }

  // get next row, checks if we are at the end of a row
  let nextRow = col == cw[row].length - 1 ? row + 1 : row;
  // same for col
  let nextCol = col == cw[row].length - 1 ? 0 : col + 1;

  // TODO not sure I need this
  let currTrie = trie;
  // current possible letters
  let currTopLevel = Object.keys(currTrie);

  // go through poss letters
  for (let keyIdx = 0; keyIdx < currTopLevel.length; keyIdx++) {
    let pickedLetter = currTopLevel[keyIdx];
    cw[row][col] = pickedLetter;

    if (checkIfPossible(cw)) {
      // is still possible, continue
      // want the original trie if the cycle is start of a row
      if (
        createCw(
          cw,
          nextRow,
          nextCol,
          nextCol === 0 ? origTrie : currTrie[pickedLetter]
        )
      ) {
        return true;
      }
    }
  }
  // went through every letter and they all failed, here or in recursion
  // so rest letter and backtrack
  cw[row][col] = "";
  return false;
};

// could maybe return something if it
// false - not possible, 0 - filled in and done, 1 - still possible, not filled in
const checkIfPossible = (cw) => {
  let currTrie = smalltrie;
  let filled = true;

  // rows
  for (let rowIdx = 0; rowIdx < cw.length; rowIdx++) {
    let currTrie = smalltrie;
    for (let colIdx = 0; colIdx < cw[rowIdx].length; colIdx++) {
      let letter = cw[rowIdx][colIdx];
      // check if row is still possible
      if (letter === "") {
        // the row is considered possible if we reach here
        filled = false;
        break;
      }
      if (!(letter in currTrie)) {
        // not possible
        return false;
      }
      // otherwise it is, so continue and update currTrie
      currTrie = currTrie[letter];
    }
  }
  // cols
  currTrie = smalltrie;
  // actualyl for now, just focus on x by ys
  // go through "longest one" for now the first one
  for (let colIdx = 0; colIdx < cw[0].length; colIdx++) {
    currTrie = smalltrie;
    for (let rowIdx = 0; rowIdx < cw.length; rowIdx++) {
      let letter = cw[rowIdx][colIdx];
      if (letter == "") {
        filled = false;
        break;
      }
      if (!(letter in currTrie)) {
        return false;
      }
      currTrie = currTrie[letter];
    }
  }

  // TODO figure out why this was here
  return true;
  // if (filled) {
  //   return 0;
  // } else {
  //   return 1;
  // }
};

let cw = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
];

const origTrie = smalltrie;

setTimeout(() => {
  console.log(cw);
  newCw = createCw(cw, 0, 0, smalltrie);
  console.log(cw);
}, 2000);

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
