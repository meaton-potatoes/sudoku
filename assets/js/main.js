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


$("document").ready(function(){
  let currentBoard;
  let puzzle = readPuzzle(easyPuzzles[Math.floor(Math.random() * easyPuzzles.length)]);
  displayPuzzle(puzzle)
});

function solve(){
  bruteForce(currentBoard);
  // while (!isSolved()) {
  //   let nextMoves = findNextMoves(currentBoard);
  //   makeNextMove(nextMoves);
  // }
}

function findNextMoves(board){
  let nextMoves = []
  for (let x = 0; x < board.length; x++) {
    let row = []
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === 0) {
        let collisions = rowColumnCollisions([x, y], board).concat(boxCollisions([x, y], board));
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

function makeNextMove(nextMoves, board){
  for (let x = 0; x < nextMoves.length; x++) {
    for (let y = 0; y < nextMoves[x].length; y++) {
      if (nextMoves[x][y].length !== 0) {
        $(`input[data-pos='${[x,y]}']`).val(nextMoves[x][y]);
        if (nextMoves[x][y].length === 1) {
          board[x][y] = nextMoves[x][y][0];
          $(`input[data-pos='${[x,y]}']`).val(board[x][y]);
        }
      }
    }
  }
}

function isSolved(board){
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === 0) {
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

function rowColumnCollisions(pos, board) {
  let collisions = [];
  for (let i = 0; i < 9; i++) {
    if (board[pos[0]][i] !== 0) {
      collisions.push(board[pos[0]][i]);
    }
    if (board[i][pos[1]] !== 0) {
      collisions.push(board[i][pos[1]]);
    }
  }
  return collisions;
}

function boxCollisions(pos, board) {
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
    if (board[pos[0]][pos[1]] !== 0) {
      collisions.push(board[pos[0]][pos[1]])
    }
  });
  return collisions;
}

function levelSelect(){
  let difficulty = $("#level").val();
  if (difficulty === "easy") {
    let puzzle = readPuzzle(easyPuzzles[Math.floor(Math.random() * easyPuzzles.length)]);
    displayPuzzle(puzzle)
  } else if (difficulty === "medium") {
    let puzzle = readPuzzle(given);
    displayPuzzle(puzzle);
  } else {

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
  let inputs = $("input");
  currentBoard = puzzle;
  $.each(inputs, function(i, input){
    resetSquare(input);
    let pos = $(input).data("pos").split(",").map(function(num){return parseInt(num)});
    if (puzzle[pos[0]][pos[1]] !== 0) {
      $(input).val(puzzle[pos[0]][pos[1]]);
      $(input).prop("disabled", true);
      $(input).css("background-color", "rgba(255, 255, 255, .5)")
    }
  });
}

function resetSquare(input){
  $(input).val("")
  $(input).prop("disabled", false);
  $(input).css("background-color", "transparent")
}

function bruteForce(board){
  if (isSolved(board)){
    makeAllMoves(board);
    return;
  }
  let nextMoves = findNextMoves(board)
  let singles = singleMoves(nextMoves, board);
  while (singles.length > 0) {
    singles.forEach(function(move){
      board[move["x"]][move["y"]] = move["value"];
    });
    nextMoves = findNextMoves(board);
    if (anyEmptySquareHasNoPossibilities(nextMoves, board)){
      return;
    }
    singles = singleMoves(nextMoves, board)
  }
  // console.log(nextMoves);
  for (let x = 0; x < nextMoves.length; x++) {
    for (let y = 0; y < nextMoves[x].length; y++) {
      for (let i = 0; i < nextMoves[x][y].length; i++) {
        let nextBoard = board.slice()
        nextBoard[x][y] = nextMoves[x][y][i]
        let next = bruteForce(nextBoard);
        if (next) {
          return next;
        }
      }
    }
  }
}

function anyEmptySquareHasNoPossibilities(nextMoves, board){
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === 0) {
        if (nextMoves[x][y].length === 0) {
          return true;
        }
      }
    }
  }
  return false;
}

function thereAreSingleMoves(nextMoves){
  for (let x = 0; x < nextMoves.length; x++) {
    for (let y = 0; y < nextMoves[x].length; y++) {
      if (nextMoves[x][y].length === 1) {
        return true;
      }
    }
  }
  return false;
}

function singleMoves(nextMoves, board) {
  singles = [];
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === 0) {
        if (nextMoves[x][y].length === 1) {
          singles.push({x: x, y: y, value: nextMoves[x][y][0]});
        }
      }
    }
  }
  console.log(singles);
  return singles;
}

function makeAllMoves(board){
  console.log("make all moves");
  console.log(board);
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] !== 0) {
        $(`input[data-pos='${[x,y]}']`).val(board[x][y]);
      }
    }
  }
}
