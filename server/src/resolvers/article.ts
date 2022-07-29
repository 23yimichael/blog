import { format } from "date-fns";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Article } from "../entities/Article";
import { ArticleResponse } from "../utils/types";

@Resolver()
export class ArticleResolver {
  @Query(() => [Article])
  async readFeaturedArticles(): Promise<Article[]> {
    const data = await Article.find({
      order: {
        featured: "DESC",
      },
    });

    if (data[2].featured === -1) {
      return [];
    }
    return [data[2], data[1], data[0]];
  }

  @Mutation(() => Boolean)
  async updateFeaturedArticle(
    @Arg("id", () => Int) id: number,
    @Arg("featured", () => Int) featured: number
  ): Promise<boolean> {
    if (featured < 0) return false;
    const cur = await Article.findOne({ where: { featured } });
    if (cur) {
      await getConnection()
        .getRepository(Article)
        .createQueryBuilder()
        .update({ featured: -1 })
        .where({ id })
        .returning("*")
        .execute();
    }

    await getConnection()
      .getRepository(Article)
      .createQueryBuilder()
      .update({ featured })
      .where({ id })
      .returning("*")
      .execute();
    return true;
  }

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
      featured: -1,
    }).save();
    return { article };
  }
}
