import colors from "colors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";

// env variables
dotenv.config()
const PORT = process.env.PORT || 8000;

//init server
const server = new ApolloServer({
    typeDefs : typeDefs,
    resolvers : resolvers
});

// server listen
const serverListen = async () => {
    await startStandaloneServer(server, {
        listen : {
            port : PORT
        }
    })
    console.log(`apollo server listening on port : ${PORT}`.bgBrightGreen.black);
}
serverListen()