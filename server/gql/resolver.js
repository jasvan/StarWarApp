const User = require( "../models/User" );

const resolve = {
  Query: {
    //User
    getUser: () => {
      console.log("Obteniendo usuario");
      return null;
    },
  },

  Mutation:{
    //user
    register: async ( _, { input } ) =>
    {
      const newUaer = input;
      newUser.email = newUser.email.toLowercase();
      newUser.usename = newUser.username.toLowercase();
    
      const { email, username, password } = newUser;
      //resolvemos si el email esta en uso
      const foundEmail = await User.findOne( { email } );
      if ( foundEmail ) throw Error( "El email ya esta en uso" );
      
      try
      {
        const user = new User( newUaer );
        user.save();
        return user;
      } catch ( error )
      {
        console.log( error )
      }
    },   
  },
};
module.export = resolve;
