import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import createApolloGraphqlServer from "./graphQl";
import 'dotenv/config'
import cors from 'cors'; 
import bodyParser from 'body-parser';
 
async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;

  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "Server is up and running. Please go to http://localhost:8000/graphql" });
  });

  app.use(
    cors(),
    bodyParser.json()
  );
  
  app.use("/graphql",expressMiddleware(await createApolloGraphqlServer()))
  
  app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`))
}

init();