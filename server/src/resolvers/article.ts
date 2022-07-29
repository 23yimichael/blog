import { format } from "date-fns";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Article } from "../entities/Article";
import { ArticleResponse } from "../utils/types";

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

  @Query(() => Article)
  async readArticle(
    @Arg("id", () => Int) id: number
  ): Promise<Article | undefined> {
    const article = await Article.findOne({ where: { id } });
    return article;
  }

  @Mutation(() => Boolean)
  async deleteArticle(@Arg("id", () => Int) id: number): Promise<boolean> {
    await Article.delete({ id });
    return true;
  }

  @Mutation(() => ArticleResponse)
  async updateArticle(
    @Arg("id", () => Int) id: number,
    @Arg("title") title: string,
    @Arg("genre") genre: "Film/TV" | "Music",
    @Arg("img") img: string,
    @Arg("text") text: string
  ): Promise<ArticleResponse> {
    if (img.length === 0) {
      return {
        error: {
          field: "Image",
          message: "You must have a link to the image!",
        },
      };
    } else if (title.length === 0) {
      return {
        error: {
          field: "Title",
          message: "You must have a title!",
        },
      };
    } else if (text.length === 0) {
      return {
        error: {
          field: "Text",
          message: "You must submit text!",
        },
      };
    } else if (genre.length === 0) {
      return {
        error: {
          field: "Genre",
          message: "You must select a genre!",
        },
      };
    }

    await getConnection()
      .getRepository(Article)
      .createQueryBuilder()
      .update({ title, genre, img, text })
      .where({ id })
      .returning("*")
      .execute();

    const article = await Article.findOne({ where: { id } });
    return { article };
  }

  @Mutation(() => ArticleResponse)
  async createArticle(
    @Arg("title") title: string,
    @Arg("genre") genre: "Film/TV" | "Music",
    @Arg("img") img: string,
    @Arg("text") text: string
  ): Promise<ArticleResponse> {
    if (img.length === 0) {
      return {
        error: {
          field: "Image",
          message: "You must have a link to the image!",
        },
      };
    } else if (title.length === 0) {
      return {
        error: {
          field: "Title",
          message: "You must have a title!",
        },
      };
    } else if (text.length === 0) {
      return {
        error: {
          field: "Text",
          message: "You must submit text!",
        },
      };
    } else if (genre.length === 0) {
      return {
        error: {
          field: "Genre",
          message: "You must select a genre!",
        },
      };
    }

    const article = await Article.create({
      img,
      genre,
      date: format(new Date(), "MMMM do, yyyy").toUpperCase(),
      title,
      text,
    }).save();
    return { article };
  }
}
