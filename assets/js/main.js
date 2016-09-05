let box1 = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
let box2 = [[0,3],[0,4],[0,5],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]];
let box3 = [[0,6],[0,7],[0,8],[1,6],[1,7],[1,8],[2,6],[2,7],[2,8]];
let box4 = [[3,0],[3,1],[3,2],[4,0],[4,1],[4,2],[5,0],[5,1],[5,2]];
let box5 = [[3,3],[3,4],[3,5],[4,3],[4,4],[4,5],[5,3],[5,4],[5,5]];
let box6 = [[3,6],[3,7],[3,8],[4,6],[4,7],[4,8],[5,6],[5,7],[5,8]];
let box7 = [[6,0],[6,1],[6,2],[7,0],[7,1],[7,2],[8,0],[8,1],[8,2]];
let box8 = [[6,3],[6,4],[6,5],[7,3],[7,4],[7,5],[8,3],[8,4],[8,5]];
let box9 = [[6,6],[6,7],[6,8],[7,6],[7,7],[7,8],[8,6],[8,7],[8,8]];
let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

$("document").ready(function(){
  let inputs = $("input");
  let currentBoard;

  function solve(){
    while (!isSolved()) {
      let nextMoves = findNextMoves();
      makeNextMove(nextMoves);
    }
  }

  function findNextMoves(){
    let nextMoves = []
    for (let x = 0; x < currentBoard.length; x++) {
      let row = []
      for (let y = 0; y < currentBoard[x].length; y++) {
        if (currentBoard[x][y] === 0) {
          let collisions = rowColumnCollisions([x, y]).concat(boxCollisions([x, y]));
          let nonCollisions = [1,2,3,4,5,6,7,8,9].filter(function(value){if (!collisions.includes(value)){return value}});
          row.push(nonCollisions);
        } else {
          row.push([]);
        }
      }
      nextMoves.push(row);
    }
    return nextMoves;
  }

  function makeNextMove(nextMoves){
    for (let x = 0; x < nextMoves.length; x++) {
      for (let y = 0; y < nextMoves[x].length; y++) {
        if (nextMoves[x][y].length !== 0) {
          $(`input[data-pos='${[x,y]}']`).val(nextMoves[x][y]);
          if (nextMoves[x][y].length === 1) {
            currentBoard[x][y] = nextMoves[x][y][0];
            $(`input[data-pos='${[x,y]}']`).val(currentBoard[x][y]);
          }
        }
      }
    }
  }

  function isSolved(){
    for (let x = 0; x < currentBoard.length; x++) {
      for (let y = 0; y < currentBoard[x].length; y++) {
        if (currentBoard[x][y] === 0) {
          return false;
        }
      }
    }
    return true;
  }

  function deleteFromArray(array, element){
    let index = array.indexOf(element);
    if (index === 0) {
      array.shift()
    } else if (index === array.length - 1) {
      array.pop();
    } else {
      array = array.slice(0, index).concat(array.slice(index + 1, array.length));
    }
    return array;
  }

  function rowColumnCollisions(pos) {
    let collisions = [];
    for (let i = 0; i < 9; i++) {
      if (currentBoard[pos[0]][i] !== 0) {
        collisions.push(currentBoard[pos[0]][i]);
      }
      if (currentBoard[i][pos[1]] !== 0) {
        collisions.push(currentBoard[i][pos[1]]);
      }
    }
    return collisions;
  }

  function boxCollisions(pos) {
    let collisions = [];
    let box = [];
    boxes.forEach(function(boxPos){
      boxPos.forEach(function(pos1){
        if (pos1[0] === pos[0] && pos1[1] === pos[1]) {
          box = boxPos;
        }
      });
    });
    box.forEach(function(pos){
      if (currentBoard[pos[0]][pos[1]] !== 0) {
        collisions.push(currentBoard[pos[0]][pos[1]])
      }
    });
    return collisions;
  }

  function levelSelect(){
    let difficulty = $("#level").val();
    if (difficulty === "hard") {
      let puzzle = readPuzzle(given);
      displayPuzzle(puzzle);
    }
  }

  function readPuzzle(str){
    let formattedPuzzle = [];
    for (let i = 0; i < str.length; i += 9) {
      formattedPuzzle.push(str.slice(i, i + 9).split("").map(function(char){return parseInt(char)}));
    }
    return formattedPuzzle;
  }

  function displayPuzzle(puzzle){
    currentBoard = puzzle;
    $.each(inputs, function(i, input){
      let pos = $(input).data("pos").split(",").map(function(num){return parseInt(num)});
      if (puzzle[pos[0]][pos[1]] !== 0) {
        $(input).val(puzzle[pos[0]][pos[1]]);
        $(input).prop("disabled", true);
        $(input).css("background-color", "rgba(255, 255, 255, .5)")
      }
    });
  }

});
