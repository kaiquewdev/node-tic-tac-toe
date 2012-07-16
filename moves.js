var Tictactoe = require('./tictactoe');

var game = new Tictactoe.game();

game.setGrid();

game.setCoupe( 0, 1, 'X' );
game.setCoupe( 0, 0, 'O' );

game.setCoupe( 1, 1, 'X' );
game.setCoupe( 2, 2, 'O' );

game.setCoupe( 2, 1, 'X' );
game.setCoupe( 1, 2, 'O' );

console.log( game.getGrid() );

console.log( game.getCoupe( 2 , 1 ) );
