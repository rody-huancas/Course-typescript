// Arrays

// en languages se tendrá un array de strings
// const languages: string[] = [];
// otra forma de tipar
// const languages: Array<string> = [];

// si queremos tener mas de un tipo de dato diferente en el array:
const languages: (string | number)[] = [];

languages.push("javascript");

/*
    ['X','O',''X] <- string []
    ['0','X',''0] <- string []
    ['X','O',''X] <- string []
*/

// elementos que serán validos dentro de nuestra matriz
type CellValue = "X" | "O" | "";

// definir la estructura que tendrá nuestra matriz con una tupla
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];

// para tipar una matriz
const gameBoard: GameBoard = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "", "X"],
];
