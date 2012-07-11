var Tictactoe = exports;

Tictactoe.game = function () {
    var players = 2,
        moves = 9,
        times = {
            x: [9, 7, 5, 3, 1],
            o: [8, 6, 4, 2, 0]
        },
        grid = [];

        // Representação do X
        var X = (function () {
            return 'X';
        } ());
        
        // Representação do O
        var O = (function () {
            return 'O'
        } ());

        this.setGrid = function () {
            // Cria a grade do jogo
            var output = false;
            var y = x = 3;

            do {
                if ( y > 0 ) {
                    grid.push( [ null, null, null ] );
                }
            } while ( y-- );
        };

        this.getGrid = function () {
            // Retorna toda a grade
            return grid;
        };

        this.setCoupe = function ( x, y, v ) {
            // Define um moviento, inserindo ele na grade
            var output = false;

            if ( grid.length > 0 && moves > -1 ) {
                if ( 
                    ( v === X && times.x.indexOf( moves ) > -1 ) || 
                    ( v === O && times.o.indexOf( moves ) > -1 ) 
                ) {
                    grid[y][x] = v;

                    moves -= 1;

                    output = true;
                }
            }

            return output;
        };

        this.getCoupe = function ( x, y ) {
            // Retorna o valor de um movimento existente na grade
            if ( grid.length > 0 ) {
                return grid[y][x];
            }
        };
};