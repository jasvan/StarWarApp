const mongoose  = require( "mongoose" )
const Schema = mongoose.Schema;

const UserSchema = Schema( {
    name: {
        type: String,
        require: true,
    },
    usermane: {
        type: String,
        require: true,
        trim: true,
        unique:true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique:true,
    },
    avatar: {
        type: String,
        trim:true,
    },
    siteWeb: {
        type: String,
        trim:true,
    },
    description: {
        type: String,
        trim,
    },
    password: {
        type: String,
        reuqire: true,
        trim:true,
    },
    createAt{
    type: Date,
        default:Date.new(),
    }
} );

module.exports = mongoose.model( "User", UserSchema );