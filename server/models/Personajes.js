const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;

const PersonajesSchema = Schema( {
    name: {
        type: String,
        require: true,
    },
    avatar: {
        type: String,
        trim:true,
    },
    description: {
        type: String,
        trim:true,
    },
    movie: {
        type: String,
        trim:true,
    },
} );

module.exports = mongoose.model( "Personajes", PersonajesSchema );