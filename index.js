// now for generating the crossword
// could also make it a graph...

// need to make this recurisve

const createCw = (cw) => {
  let currTrie = trie;
  let needToBracktrack = true;

  for (let rowIdx = 0; rowIdx < cw.length; rowIdx++) {
    currTrie = trie;
    for (let colIdx = 0; colIdx < cw[rowIdx].length; colIdx++) {
      let currTopLevel = Object.keys(currTrie);
      let pickedLetter = "";
      for (let keyIdx = 0; keyIdx < currTopLevel.length; keyIdx++) {
        cw[rowIdx][colIdx] = currTopLevel[keyIdx];
        let check = checkIfPossible(cw);
        if (check === 0) {
          // done
          return cw;
          // not done but possible
        } else if (check === 1) {
          needToBracktrack = false;
          pickedLetter = currTopLevel[keyIdx];
          // want to break out of loop
          break;
          // false - not possible
        } else {
          needToBracktrack = true;
          // want to continue
        }
        // need to backtrack if went through everything
      }

      if (needToBracktrack) {
        console.log("need to backtrack");
        return;
        // bactrack
        // if it is at zero, back on row, otherwise, go back on column
      } else {
        currTrie = currTrie[pickedLetter];
      }
    }
  }
  // if we get here, not possible
  return false;
};

// could maybe return something if it
// false - not possible, 0 - filled in and done, 1 - still possible, not filled in
const checkIfPossible = (cw) => {
  let currTrie = trie;
  let filled = true;

  // rows
  for (let rowIdx = 0; rowIdx < cw.length; rowIdx++) {
    let currTrie = trie;
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
  currTrie = trie;
  // actualyl for now, just focus on x by ys
  // go through "longest one" for now the first one
  for (let colIdx = 0; colIdx < cw[0].length; colIdx++) {
    currTrie = trie;
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

  /*
xxxxxx
xxxxxx
xxxxxx

  */

  // for now, say _ is black box
  // this will account for non square and black boxes
  // for (let colIdx = 0; colIdx < cw.length; colIdx++) {
  //   for(let rowIdx = 0; rowIdx < )

  if (filled) {
    return 0;
  } else {
    return 1;
  }
};

let cw = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
];
console.log(cw);
newCw = createCw(cw);
console.log(newCw);

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
