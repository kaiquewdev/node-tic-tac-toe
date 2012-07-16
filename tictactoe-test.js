var vows = require('vows'),
    assert = require('assert'),
    Tictactoe = require('./tictactoe');

vows.describe('Tic-tac-toe').addBatch({
    'Montar grade': {
        topic: new Tictactoe.game(),

        '3x3': function ( topic ) {
            topic.setGrid();
            
            assert.equal( topic.getGrid().length === 3, true, 'Grade não foi montada de acordo com o padrão.' )
        }
    },

    'Definindo movimento': {
        topic: new Tictactoe.game(),

        'em um ponto da grade': function ( topic ) {
            topic.setGrid();

            assert.equal( topic.setCoupe( 0, 2, 'X' ), true, 'Ponto não definido corretamente na grade.' );
        }
    },

    'Vez do X': {
        topic: new Tictactoe.game(),

        'Testando jogada': function ( topic ) {
            topic.setGrid();

            assert.equal( topic.setCoupe( 0, 2, 'X' ), true, 'Não é a vez do X' );
        }
    },

    'Vez do O': {
        topic: new Tictactoe.game(),

        'Testando jogada': function ( topic ) {
            topic.setGrid();

            topic.setCoupe( 0, 1, 'X' );

            assert.equal( topic.setCoupe( 0, 2, 'O' ), true, 'Não é a vez do O' );
        }
    },

    'Não é a vez do O': {
        topic: new Tictactoe.game(),

        'Testando jogada': function ( topic ) {
            topic.setGrid();

            assert.equal( topic.setCoupe( 0, 2, 'O' ), false, 'É a vez do X' );
        }
    },

    'Não é a vez do X': {
        topic: new Tictactoe.game(),

        'Testando jogada': function ( topic ) {
            topic.setGrid();

            topic.setCoupe( 0, 0, 'X' );

            assert.equal( topic.setCoupe( 1, 2, 'X' ), false, 'É a vez do O' );
        }
    },

    'Horizontal, primeira': {
        topic: new Tictactoe.game(),

        'linha': function ( topic ) {
            topic.setGrid();

            topic.setCoupe( 0, 0, 'X' );
            topic.setCoupe( 0, 1, 'O' );

            topic.setCoupe( 1, 0, 'X' );
            topic.setCoupe( 0, 2, 'O' );

            topic.setCoupe( 2, 0, 'X' );

            assert.equal( topic.getCoupe( 0, 0 ) === 'X', true, 'Não correspondente a X' );
            assert.equal( topic.getCoupe( 1, 0 ) === 'X', true, 'Não correspondente a X' );
            assert.equal( topic.getCoupe( 2, 0 ) === 'X', true, 'Não correspondente a X' );
        },
    },

    'Horizontal, segunda': {
        topic: new Tictactoe.game(),

        'linha': function ( topic ) {
            topic.setGrid();

            topic.setCoupe( 0, 1, 'X' );
            topic.setCoupe( 0, 0, 'O' );

            topic.setCoupe( 1, 1, 'X' );
            topic.setCoupe( 2, 2, 'O' );

            topic.setCoupe( 2, 1, 'X' );

            assert.equal( topic.getCoupe( 0, 1 ) === 'X', true, 'Não correspondente a X' );
            assert.equal( topic.getCoupe( 1, 1 ) === 'X', true, 'Não correspondente a X' );
            assert.equal( topic.getCoupe( 2, 1 ) === 'X', true, 'Não correspondente a X' );
        }
    },

    'Horizontal, terceira': {
        topic: new Tictactoe.game(),

        'linha': function ( topic ) {
            topic.setGrid();

            topic.setCoupe( 0, 2, 'X' );
            topic.setCoupe( 0, 0, 'O' );

            topic.setCoupe( 1, 2, 'X' );
            topic.setCoupe( 2, 0, 'O' );

            topic.setCoupe( 2, 2, 'X' );

            assert.equal( topic.getCoupe( 0, 2 ) === 'X', true, 'Não correspondente a X' );
            assert.equal( topic.getCoupe( 1, 2 ) === 'X', true, 'Não correspondente a X' );
            assert.equal( topic.getCoupe( 2, 2 ) === 'X', true, 'Não correspondente a X' );
        }
    },

    'Vertical, primeira': {
        topic: new Tictactoe.game(),

        'linha': function ( topic ) {
            topic.setGrid();

            topic.setCoupe( 0, 0, 'X' );
            topic.setCoupe( 1, 2, 'O' );

            topic.setCoupe( 0, 1, 'X' );
            topic.setCoupe( 2, 2, 'O' );

            topic.setCoupe( 0, 2, 'X' );

            assert.equal( topic.getCoupe( 0, 0 ) === 'X', true, 'Não correspondente a X' );
            assert.equal( topic.getCoupe( 0, 1 ) === 'X', true, 'Não correspondente a X' );
            assert.equal( topic.getCoupe( 0, 2 ) === 'X', true, 'Não correspondente a X' );
        }
    },
    
    'Vertical, segunda': {
        topic: new Tictactoe.game(),

        'linha': function ( topic ) {
            topic.setGrid();

            topic.setCoupe( 1, 0, 'X' );
            topic.setCoupe( 0, 2, 'O' );

            topic.setCoupe( 1, 1, 'X' );
            topic.setCoupe( 2, 2, 'O' );

            topic.setCoupe( 1, 2, 'X' );

            assert.equal( topic.getCoupe( 1, 0 ) === 'X', true, 'Não correspondente a X' );
            assert.equal( topic.getCoupe( 1, 1 ) === 'X', true, 'Não correspondente a X' );
            assert.equal( topic.getCoupe( 1, 2 ) === 'X', true, 'Não correspondente a X' );
        }
    },

    'Vertical, terceira': {
        topic: new Tictactoe.game(),

        'linha': function ( topic ) {
            topic.setGrid();

            topic.setCoupe( 2, 0, 'X' );
            topic.setCoupe( 1, 2, 'O' );

            topic.setCoupe( 2, 1, 'X' );
            topic.setCoupe( 0, 2, 'O' );

            topic.setCoupe( 2, 2, 'X' );

            assert.equal( topic.getCoupe( 2, 0 ) === 'X', true, 'Não correspondente a X' );
            assert.equal( topic.getCoupe( 2, 1 ) === 'X', true, 'Não correspondente a X' );
            assert.equal( topic.getCoupe( 2, 2 ) === 'X', true, 'Não correspondente a X' );
        }
    },
}).run();
