import { Arg, Int, Query, Resolver } from "type-graphql";
import { Article } from "../entities/Article";

@Resolver()
export class ArticleResolver {
  @Query(() => [Article])
  async readArticles(
    @Arg("genre") genre: string,
    @Arg("take", () => Int, { nullable: true }) take: number | null
  ): Promise<Article[]> {
    let data;
    if (take) {
      data = await Article.find({
        where: { genre },
        order: {
          updatedAt: "DESC",
        },
        take,
      });
    } else {
      data = await Article.find({
        where: { genre },
        order: {
          updatedAt: "DESC",
        },
      });
    }

    return data;
  }
}
