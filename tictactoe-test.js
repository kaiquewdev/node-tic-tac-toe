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

            topic.setCoupe( 0, 2, 'X' );

            assert.equal( topic.setCoupe( 1, 2, 'X' ), false, 'É a vez do O' );
        }
    },
}).run();