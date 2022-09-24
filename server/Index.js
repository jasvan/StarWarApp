const mongoose = require( "mongoose" );

const { ApolloServer } = require("apollo-server");

const typeDefs = require("./gql/schema");
const resolver = require("./gql/resolver");

require("dotenv").config({ path: ".env" });
mongoose.connect(
  process.env.BBDD,
  {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex:true
  },
  (err, _) => {
    if (err) {
      console.log("*** Error de conexion ***");
    } else {
      server();
    }
  }
);

function server() {
  const serverApollo = new ApolloServer({
    typeDefs,
    resolver,
  });

  serverApollo.listen().then(({ url }) => {
    console.log(`Servidor running on url ${url} <- ctrl + click`);
  });
}
