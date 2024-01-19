import { ApolloServer } from "@apollo/server";
import { Weather } from "./weather";


async function createApolloGraphqlServer() {
  const gqlServer = new ApolloServer({
    typeDefs: `
            ${Weather.typeDefs}
            type Query {
               ${Weather.queries}
            }
        `,
    resolvers: {
      Query: {
        ...Weather.resolvers.queries,
      }
    },
  });
  
  

  // Start the gql server
  await gqlServer.start();

  return gqlServer;
}

export default createApolloGraphqlServer;