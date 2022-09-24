const Personajes = require( "../models/Personajes" );

async function registerAvatar (input)
{
    const newPersonaje = input;
    newPersonaje.name = newPersonaje.name.toLowerCase();
    newPersonaje.avatar = newPersonaje.avatar.toLowerCase();
    
    const { name, avatar } = newPersonaje;
    const foundName = await Personajes.findOne( { name } );
    if (foundName) throw new Error("El nombre del personaje ya esta en uso !!") 
        
    const foundAvatar = await Personajes.findOne( { avatar } );
    if ( foundAvatar ) throw new Error( "El avtar ya esta en uso" );

    try {
        const personaje = new Personajes( newPersonaje );
        personaje.save();
        return personaje;
    } catch (error) {
        console.log( error );
    }
}
module.exports = {
    registerAvatar,
}