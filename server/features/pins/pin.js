const mongoose = require('mongoose');

const Pin = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    published: {
        type: Date,
        default: Date.now()
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model( "Pin", Pin );



const Board = new mongoose.Schema( {
  title: { type: String},
  pin: {type: mongoose.Schema.Types.ObjectId, ref: 'Pin'}
} );

module.exports = mongoose.model( "Pin", Program );
