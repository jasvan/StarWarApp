const resolve = {
  Query: {
    //User
    getUser: () => {
      console.log("Obteniendo usuario");
      return null;
    },
  },

  Mutation: (_, { input }) => {
    console.log("Registrando usuario");
    return null;
  },
};
module.export = resolve;
