const easyPuzzles = [
  "003020600900305001001806400008102900700000008006708200002609500800203009005010300",
  "200080300060070084030500209000105408000000000402706000301007040720040060004010003",
  "000000907000420180000705026100904000050000040000507009920108000034059000507000000",
  "030050040008010500460000012070502080000603000040109030250000098001020600080060020",
  "020810740700003100090002805009040087400208003160030200302700060005600008076051090",
  "100920000524010000000000070050008102000000000402700090060000000000030945000071006",
  "043080250600000000000001094900004070000608000010200003820500000000000005034090710",
  "480006902002008001900370060840010200003704100001060049020085007700900600609200018",
  "000900002050123400030000160908000000070000090000000205091000050007439020400007000",
  "001900003900700160030005007050000009004302600200000070600100030042007006500006800",
  "000125400008400000420800000030000095060902010510000060000003049000007200001298000",
  "062340750100005600570000040000094800400000006005830000030000091006400007059083260",
  "300000000005009000200504000020000700160000058704310600000890100000067080000005437",
  "630000000000500008005674000000020000003401020000000345000007004080300902947100080",
  "000020040008035000000070602031046970200000000000501203049000730000000010800004000",
  "361025900080960010400000057008000471000603000259000800740000005020018060005470329",
  "050807020600010090702540006070020301504000908103080070900076205060090003080103040",
  "080005000000003457000070809060400903007010500408007020901020000842300000000100080",
  "003502900000040000106000305900251008070408030800763001308000104000020000005104800",
  "000000000009805100051907420290401065000000000140508093026709580005103600000000000",
  "020030090000907000900208005004806500607000208003102900800605007000309000030020050",
  "005000006070009020000500107804150000000803000000092805907006000030400010200000600",
  "040000050001943600009000300600050002103000506800020007005000200002436700030000040",
  "004000000000030002390700080400009001209801307600200008010008053900040000000000800",
  "360020089000361000000000000803000602400603007607000108000000000000418000970030014",
  "500400060009000800640020000000001008208000501700500000000090084003000600060003002",
  "007256400400000005010030060000508000008060200000107000030070090200000004006312700",
  "000000000079050180800000007007306800450708096003502700700000005016030420000000000",
  "030000080009000500007509200700105008020090030900402001004207100002000800070000090",
  "200170603050000100000006079000040700000801000009050000310400000005000060906037002",
  "000000080800701040040020030374000900000030000005000321010060050050802006080000000",
  "000000085000210009960080100500800016000000000890006007009070052300054000480000000",
  "608070502050608070002000300500090006040302050800050003005000200010704090409060701",
  "050010040107000602000905000208030501040070020901080406000401000304000709020060010",
  "053000790009753400100000002090080010000907000080030070500000003007641200061000940",
  "006080300049070250000405000600317004007000800100826009000702000075040190003090600",
  "005080700700204005320000084060105040008000500070803010450000091600508007003010600",
  "000900800128006400070800060800430007500000009600079008090004010003600284001007000",
  "000080000270000054095000810009806400020403060006905100017000620460000038000090000",
  "000602000400050001085010620038206710000000000019407350026040530900020007000809000",
  "000900002050123400030000160908000000070000090000000205091000050007439020400007000",
  "380000000000400785009020300060090000800302009000040070001070500495006000000000092",
  "000158000002060800030000040027030510000000000046080790050000080004070100000325000",
  "010500200900001000002008030500030007008000500600080004040100700000700006003004050",
  "080000040000469000400000007005904600070608030008502100900000005000781000060000010",
  "904200007010000000000706500000800090020904060040002000001607000000000030300005702",
  "000700800006000031040002000024070000010030080000060290000800070860000500002006000",
  "001007090590080001030000080000005800050060020004100000080000030100020079020700400",
  "000003017015009008060000000100007000009000200000500004000000020500600340340200000",
  "300200000000107000706030500070009080900020004010800050009040301000702000000008006"
];

class Sudoku {

  constructor(){
    this.currentBoard;
  }

  load(){
    this.displayPuzzle("904200007010000000000706500000800090020904060040002000001607000000000030300005702");
  }

  solve(){
    console.log("here");
  }

  rowColumnNonCollisions(pos, board){
    if (board[pos[0]][pos[1]] === 0) {
      const rowCollisions = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(y => board[pos[0]][y]).filter(val => val !== 0);
      const columnCollisions = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(x => board[x][pos[1]]).filter(val => val !== 0);
      let nonCollisions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      rowCollisions.concat(columnCollisions).forEach(collision => {
        nonCollisions = nonCollisions.filter(val => val !== collision)
      });
      return nonCollisions
    } else {
      return [];
    }
  }

  boxNonCollisions(pos, board){
    if (board[pos[0]][pos[1]] === 0) {
      let xBox = Math.floor(pos[0] / 3);
      let yBox = Math.floor(pos[1] / 3);
      let nonCollisions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (let x = 0; x < board.length; x++) {
        if (Math.floor(x / 3) === xBox) {
          for (let y = 0; y < board[x].length; y++) {
            if (Math.floor(y / 3) === yBox) {
              nonCollisions = nonCollisions.filter(val => val !== board[x][y]);
            }
          }
        }
      }
      return nonCollisions;
    } else {
      return [];
    }
  }

  squarePossibleMoves(pos, board) {
    let rowColumnNonCollisions = this.rowColumnNonCollisions(pos, board);
    let boxNonCollisions = this.boxNonCollisions(pos, board);
    rowColumnNonCollisions = rowColumnNonCollisions.filter(val => boxNonCollisions.includes(val));
    boxNonCollisions = boxNonCollisions.filter(val => rowColumnNonCollisions.includes(val));
    let nonCollisions = rowColumnNonCollisions.concat(boxNonCollisions);
    return $.unique(nonCollisions);
  }

  allPossibleMoves(board) {
    let allPossibilities = [];
    for (let x = 0; x < board.length; x++) {
      let row = [];
      for (let y = 0; y < board[x].length; y++) {
        if (board[x][y] === 0) {
          row.push(this.squarePossibleMoves([x,y], board));
        } else {
          row.push([]);
        }
      }
      allPossibilities.push(row);
    }
    return allPossibilities;
  }

  levelSelect(){
    let puzzle;
    switch ($("#level").val()) {
      case "easy":
        puzzle = readPuzzle(easyPuzzles[Math.floor(Math.random() * easyPuzzles.length)]);
        break;
      case "medium":
        puzzle = readPuzzle(given);
        break;
      case "hard":
        break;
    }
    displayPuzzle(puzzle)
  }

  reset(){
    $.each($("input"), (i, input) => {
      this.resetSquare(input);
    });
  }

  resetSquare(input){
    $(input).val("").prop("disabled", false).css("background-color", "transparent");
  }

  readPuzzle(str){
    let puzzle = [];
    str.match(/.{1,9}/g).forEach(rowStr => {
      puzzle.push(rowStr.split("").map(letter => parseInt(letter)))
    });
    return puzzle;
  }

  lock(){
    for (let x = 0; x < this.currentBoard.length; x++) {
      let row = [];
      for (let y = 0; y < this.currentBoard[x].length; y++) {
        let inputValue = parseInt(this.input([x, y]).val());
        if ([1,2,3,4,5,6,7,8,9].includes(inputValue)) {
          this.currentBoard[x][y] = inputValue;
        } else {
          this.currentBoard[x][y] = 0;
        }
      }
    }
    this.displayPuzzle(this.currentBoard)
  }

  input(pos){
    return $(`input[data-pos='${[pos[0],pos[1]]}']`);
  }

  displayPuzzle(puzzle){
    console.log(puzzle);
    if (typeof puzzle === "string") {
      this.currentBoard = this.readPuzzle(puzzle);
    } else if (typeof puzzle === "object") {
      this.currentBoard = puzzle;
    }
    this.reset();
    this.currentBoard.forEach((row, x) => {
      row.forEach((pos, y) => {
        if (pos > 0) {
          this.input([x, y]).val(pos).prop("disabled", true).css("background-color", "rgba(255, 255, 255, .5)");
        }
      });
    });
  }

  isUnsolvable(board){
    let allPossibilities = this.allPossibleMoves(board);
    // console.log(allPossibilities);
    for (let x = 0; x < allPossibilities.length; x++) {
      for (let y = 0; y < allPossibilities[x].length; y++) {
        if (board[x][y] === 0 && allPossibilities[x][y].length === 0){
          return true;
        }
      }
    }
    return false;
  }

  isSolved(board){
    for (let x = 0; x < board.length; x++) {
      for (let y = 0; y < board[x].length; y++) {
        if (board[x][y] === 0) {
          return false;
        }
      }
    }
    return true;
  }

  solve(board = this.currentBoard){
    board = this.copyBoard(board)
    if (this.isSolved(board)){
      console.log(false);
      return false;
    }
    let allPossibilities = this.allPossibleMoves(board);
    for (let x = 0; x < board.length; x++){
      for (let y = 0; y < board[x].length; y++) {
        if (board[x][y] === 0) {
          for (let i = 0; i < allPossibilities[x][y].length; i++) {
            console.log(board);
            board[x][y] = allPossibilities[x][y][i];
            let next = this.solve(board);
            if (next) {
              return next;
            } else {
              continue;
            }
          }
        }
      }
    }
    this.displayPuzzle(board);
    console.log(true);
    return true;
  }

  copyBoard(board){
    let boardCopy = [];
    for (let x = 0; x < board.length; x++) {
      let row = [];
      for (let y = 0; y < board[x].length; y++) {
        row.push(board[x][y]);
      }
      boardCopy.push(row);
    }
    return boardCopy;
  }

  singleMoves(allPossibilities, board){
    let singles = [];
    for (let x = 0; x < allPossibilities.length; x++) {
      for (let y = 0; y < allPossibilities[x].length; y++) {
        if (board[x][y] === 0 && allPossibilities[x][y].length === 1) {
          singles.push({x: x, y: y, value: allPossibilities[x][y][0]});
        }
      }
    }
    console.log(singles);
    return singles;
  }

}

let sudoku = new Sudoku();
window.sudoku = sudoku;

$(document).ready(()=>{
  sudoku.load();
});

function solve(){
  sudoku.solve();
}

function lock(){
  sudoku.lock();
}

function reset(){
  sudoku.reset();
}
