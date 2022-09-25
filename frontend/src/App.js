import "./App.css";
import React from "react";
import { ApolloClient, HttpLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import client from "./config/apollo";
// import Navigation from "./routes/Navigation";
import Home from './page/Home/Home.js'

export default function App() {
  return (
    <ApolloProvider client={client}>      
      <Home />
       
    </ApolloProvider>
  );
}
