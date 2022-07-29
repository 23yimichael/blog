"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Article_1 = require("./entities/Article");
const Author_1 = require("./entities/Author");
const article_1 = require("./resolvers/article");
const author_1 = require("./resolvers/author");
const main = async () => {
    await (0, typeorm_1.createConnection)({
        type: "postgres",
        database: "blog",
        username: "postgres",
        password: "postgres",
        logging: true,
        synchronize: true,
        entities: [Article_1.Article, Author_1.Author],
    });
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: "http://localhost:3000",
        credentials: true,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [article_1.ArticleResolver, author_1.AuthorResolver],
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
//# sourceMappingURL=index.js.map