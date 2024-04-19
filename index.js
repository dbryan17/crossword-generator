const generateBoard = (height, width) => {
  // get parent
  let divCont = document.querySelector("#container");
  divCont.innerHTML = ``;
  let cwTable = document.createElement("table");
  cwTable.id = "cwTable";

  // rows
  for (let h = 0; h < height; h++) {
    let row = document.createElement("tr");
    // add cells
    for (let w = 0; w < width; w++) {
      let cell = document.createElement("td");
      cell.classList.add("cell", `row${h.toString()}`, `col${w.toString()}`);
      let textContainer = document.createElement("div");
      textContainer.classList.add("textContainer");
      let input = document.createElement("input");
      input.id = `cell${h.toString()}${w.toString()}`;
      input.classList.add("input");
      input.type = "text";
      input.maxLength = "1";
      input.autocomplete = "off";

      textContainer.appendChild(input);
      // event listners
      input.addEventListener("click", () => {
        if (!isDoneEditing && isBlackSquareSelect) {
          console.log("clicked");
          console.log(cell);

          if (input.style.backgroundColor) {
            input.style.backgroundColor = "";
          } else {
            input.style.backgroundColor = "#DCF8C6";
          }
        }
      });
      input.addEventListener("input", (evt) => {
        if (!isDoneEditing && isLetterInsert) {
          // input.value = evt.value;
        } else {
          input.value = "";
        }
      });

      /////////
      cell.appendChild(textContainer);
      row.classList.add("row");
      row.appendChild(cell);
    }
    cwTable.appendChild(row);
  }
  divCont.appendChild(cwTable);
};

document.querySelector("#createGridBtn").addEventListener("click", () => {
  isDoneEditing = false;
  // get height and width
  let height = document.querySelector("#heightInput").value;
  let width = document.querySelector("#widthInput").value;
  generateBoard(height, width);
});
/////////
// global vars - should prob use react or something
let isBlackSquareSelect = false;
let isLetterInsert = false;
let isDoneEditing = false;

////////

document.querySelector("#blackSquareBtn").addEventListener("click", () => {
  if (!isLetterInsert) {
    isBlackSquareSelect = !isBlackSquareSelect;
    // toggle style class
    if (isBlackSquareSelect) {
      document.querySelector("#blackSquareBtn").classList.add("active");
    } else {
      document.querySelector("#blackSquareBtn").classList.remove("active");
    }
  }
});

document.querySelector("#lettersBtn").addEventListener("click", () => {
  if (!isBlackSquareSelect) {
    isLetterInsert = !isLetterInsert;
    // toggle styles
    if (isLetterInsert) {
      document.querySelector("#lettersBtn").classList.add("active");
    } else {
      document.querySelector("#lettersBtn").classList.remove("active");
    }
  }
});

document.querySelector("#lockBtn").addEventListener("click", () => {
  isDoneEditing = true;
});

doccument.querySelector("#fillBtn").addEventListener("click", () => {
  // need to go through and find all black squares and givens and such and call fcn to autofill
  document.querySelector("");
});

////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////

document.querySelector("#generateBtn").addEventListener("click", () => {
  console.log("(((((");
  let divCont = document.querySelector("#container");
  divCont.innerHTML = ``;

  // let grid = [
  //   ["_", ",", ",", ",", "_"],
  //   [",", ",", ",", ",", ","],

  // ]
  let cw = outerCreateCw(grid, commontrie);
  console.log(cw);

  // const parser = new DOMParser();

  // let cwHtml = parser.parseFromString(
  //   `

  //   `
  // )
  const cwTable = document.createElement("table");
  const cwRowOne = document.createElement("tr");
  const cwRowTwo = document.createElement("tr");
  const cwRowThree = document.createElement("tr");
  const cwRowFour = document.createElement("tr");
  cwRowOne.innerHTML = `
    <td>${cw[0][0]}</td>
    <td>${cw[0][1]}</td>
    <td>${cw[0][2]}</td>
    <td>${cw[0][3]}</td>
  `;
  cwRowTwo.innerHTML = `
    <td>${cw[1][0]}</td>
    <td>${cw[1][1]}</td>
    <td>${cw[1][2]}</td>
    <td>${cw[1][3]}</td>
  `;
  cwRowThree.innerHTML = `
    <td>${cw[2][0]}</td>
    <td>${cw[2][1]}</td>
    <td>${cw[2][2]}</td>
    <td>${cw[2][3]}</td>

  `;
  cwRowFour.innerHTML = `
    <td>${cw[3][0]}</td>
    <td>${cw[3][1]}</td>
    <td>${cw[3][2]}</td>
    <td>${cw[3][3]}</td>
  `;
  cwTable.appendChild(cwRowOne);
  cwTable.appendChild(cwRowTwo);
  cwTable.appendChild(cwRowThree);
  cwTable.appendChild(cwRowFour);

  divCont.appendChild(cwTable);
});
