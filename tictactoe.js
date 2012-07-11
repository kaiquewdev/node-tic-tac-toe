var Tictactoe = exports;

Tictactoe.game = function () {
    var players = 2,
        moves = 9,
        times = {
            x: [9, 7, 5, 3, 1],
            o: [8, 6, 4, 2, 0]
        },
        grid = [];

        this.setGrid = function () {
            var output = false;
            var y = x = 3;

            do {
                if ( y > 0 ) {
                    grid.push( [ null, null, null ] );
                }
            } while ( y-- );
        };

        this.getGrid = function () {
            return grid;
        };

        this.setCoupe = function ( x, y, v ) {
            if ( grid.length > 0 ) {
                moves -= 1;

                if ( moves > -1 ) {
                    if ( !( v === 'X' && moves in times.x ) || !( v === 'O' && moves in times.y ) ) {
                        grid[y][x] = v;
                    }
                }
            }
        };

        this.getCoupe = function ( x, y ) {
            if ( grid.length > 0 ) {
                return grid[y][x];
            }
        };
};