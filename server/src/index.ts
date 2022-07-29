import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { Article } from "./entities/Article";
import { Author } from "./entities/Author";
import { ArticleResolver } from "./resolvers/article";
import { AuthorResolver } from "./resolvers/author";

const main = async () => {
  await createConnection({
    type: "postgres",
    database: "blog",
    username: "postgres",
    password: "postgres",
    logging: true,
    synchronize: true,
    entities: [Article, Author],
  });

  const app = express();

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  const apolloServer = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    schema: await buildSchema({
      resolvers: [ArticleResolver, AuthorResolver],
      validate: false,
    }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log("Server started on localhost:4000");
  });
};

main().catch((e) => console.error(e));
