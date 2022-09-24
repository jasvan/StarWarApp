const User = require( "../models/User" );
const Personajes = require( "../models/Personajes" );

const bcryptjs = require( "bcryptjs" );

const resolve = {
  Query: {
    //User
    getUser: () => {
      console.log("Obteniendo usuario");
      return null;
    },
    gerPersonajes: () => {
      console.log("Obteniendo personajes");
      return null;
    },
  },

  Mutation: {
    //user
    register: async (_, { input }) => {
      const newUser = input;
      newUser.email = newUser.email.toLowerCase();
      newUser.usename = newUser.username.toLowerCase();

      const { email, username, password } = newUser;
      //resolvemos si el email esta en uso
      const foundEmail = await User.findOne({ email });
      if (foundEmail) throw new Error("El email ya esta en uso");

      const foundUsername = await User.findOne({ username });
      if (foundUsername) throw new Error("El nombre de usuario ya esta en uso");

      // encriptar password
      const salt = await bcryptjs.genSaltSync( 10 );
      newUser.password = await bcryptjs.hash( password, salt );

      try {
        const user = new User(newUser);
        user.save();
        return user;
      } catch (error) {
        console.log(error);
      }
    },
  },
  
};
module.export = resolve;
