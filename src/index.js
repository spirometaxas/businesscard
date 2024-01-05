const CARD = '' +
  '                                                                              \n' +
  ' ┌───────┬───────────────────────────────────────────────────────────┬───────┐\n' +
  ' │ ┌───┐ │───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │ ┌───┐ │\n' +
  ' │ │   │ │ ┌─┘ │ ┌─┘ │ ┌─┘ │ ┌─┘ │ ┌─┘ │ ┌─┘ │ ┌─┘ │ ┌─┘ │ ┌─┘ │ ┌─┘ │ │   │ │\n' +
  ' │ └───┘ │ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───│ └───┘ │\n' +
  ' ├───────┼───────────────────────────────────────────────────────────┼───────┤\n' +
  ' │ ┌─┐ │ │                                                           │ ┌─┐ │ │\n' +
  ' │ │ └─┘ │                                                           │ │ └─┘ │\n' +
  ' │ └───┐ │                       Spiro Metaxas                       │ └───┐ │\n' +
  ' │ ┌─┐ │ │                                                           │ ┌─┐ │ │\n' +
  ' │ │ └─┘ │            I am a software developer who likes            │ │ └─┘ │\n' +
  ' │ └───┐ │                   building cool things!                   │ └───┐ │\n' +
  ' │ ┌─┐ │ │                                                           │ ┌─┐ │ │\n' +
  ' │ │ └─┘ │                                                           │ │ └─┘ │\n' +
  ' │ └───┐ │                     Web: spirometaxas.com                 │ └───┐ │\n' +
  ' │ ┌─┐ │ │                LinkedIn: @spiro-metaxas                   │ ┌─┐ │ │\n' +
  ' │ │ └─┘ │                  GitHub: @spirometaxas                    │ │ └─┘ │\n' +
  ' │ └───┐ │                 Twitter: @spirometaxas                    │ └───┐ │\n' +
  ' │ ┌─┐ │ │                    Card: npx spirometaxas                 │ ┌─┐ │ │\n' +
  ' │ │ └─┘ │                                                           │ │ └─┘ │\n' +
  ' │ └───┐ │                                                           │ └───┐ │\n' +
  ' ├───────┼───────────────────────────────────────────────────────────┼───────┤\n' +
  ' │ ┌───┐ │───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ │ ┌───┐ │\n' +
  ' │ │   │ │ ┌─┘ │ ┌─┘ │ ┌─┘ │ ┌─┘ │ ┌─┘ │ ┌─┘ │ ┌─┘ │ ┌─┘ │ ┌─┘ │ ┌─┘ │ │   │ │\n' +
  ' │ └───┘ │ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───│ └───┘ │\n' +
  ' └───────┴───────────────────────────────────────────────────────────┴───────┘\n';

const BLUE = '\u001b[38;5;33m';
const OFF  = '\u001b[0m';

const COLOR_SETS = [
    { x1:  1, y1:  1, x2: 76, y2:  1 },
    { x1:  1, y1:  5, x2: 76, y2:  5 },
    { x1:  1, y1: 21, x2: 76, y2: 21 },
    { x1:  1, y1: 25, x2: 76, y2: 25 },

    { x1:  1, y1:  1, x2:  1, y2: 25 },
    { x1:  9, y1:  1, x2:  9, y2: 25 },
    { x1: 69, y1:  1, x2: 69, y2: 25 },
    { x1: 77, y1:  1, x2: 77, y2: 25 },

    { x1: 26, y1: 14, x2: 34, y2: 14 },  // Web
    { x1: 26, y1: 15, x2: 34, y2: 15 },  // LinkedIn
    { x1: 26, y1: 16, x2: 34, y2: 16 },  // GitHub
    { x1: 26, y1: 17, x2: 34, y2: 17 },  // Twitter
    { x1: 26, y1: 18, x2: 34, y2: 18 },  // Card
];

function parseBoard(data) {
    const parts = data.split('\n');
    const board = [];
    for (const part of parts) {
        const row = [];
        for (var i = 0; i < part.length; i++) {
            row.push({ character: part.charAt(i) });
        }
        board.push(row);
    }
    return board;
}

function addColors(board) {
    for (const colorSet of COLOR_SETS) {
        for (var i = colorSet.y1; i <= colorSet.y2; i++) {
            for (var j = colorSet.x1; j <= colorSet.x2; j++) {
                board[i][j].color = BLUE;
            }
        }
    }
}

function draw(board) {
    var result = '';
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j].color) {
                result += BLUE;
            }
            result += board[i][j].character;
            if (board[i][j].color) {
                result += OFF;
            }
        }
        result += '\n';
    }
    return result;
}

const board = parseBoard(CARD);
addColors(board);
console.log(draw(board));