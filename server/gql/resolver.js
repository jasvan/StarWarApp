const userController = require("../controller/userController");
const personajesController = require("../controller/personajesController");

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
    register: async (_, { input }) => userController.register(input),
    //personajes
    register: async (_, { input }) =>
      personajesController.registerAvatar(input),
  },
};
module.export = resolve;
