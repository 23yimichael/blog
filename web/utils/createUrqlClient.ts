import { cacheExchange } from "@urql/exchange-graphcache";
import { dedupExchange, fetchExchange } from "urql";
import { DeleteArticleMutationVariables } from "../generated/graphql";

export const createUrqlClient = () => {
  return {
    url: "http://localhost:4000/graphql",
    exchanges: [
      dedupExchange,
      cacheExchange({
        updates: {
          Mutation: {
            createArticle: (_result, _args, cache, _info) => {
              const allFields = cache.inspectFields("Query");
              const fieldInfos = allFields.filter(
                (info) =>
                  info.fieldName === "readArticle" ||
                  info.fieldName === "readArticles" ||
                  info.fieldName === "readFeaturedArticles"
              );
              fieldInfos.forEach((fi) => {
                cache.invalidate("Query", fi.fieldName, fi.arguments || {});
              });
            },
            deleteArticle: (_result, args, cache, _info) => {
              cache.invalidate({
                __typename: "Article",
                id: (args as DeleteArticleMutationVariables).id,
              });
            },
            updateArticle: (_result, _args, cache, _info) => {
              const allFields = cache.inspectFields("Query");
              const fieldInfos = allFields.filter(
                (info) =>
                  info.fieldName === "readArticle" ||
                  info.fieldName === "readArticles" ||
                  info.fieldName === "readFeaturedArticles"
              );
              fieldInfos.forEach((fi) => {
                cache.invalidate("Query", fi.fieldName, fi.arguments || {});
              });
            },
          },
        },
      }),
      fetchExchange,
    ],
  };
};
