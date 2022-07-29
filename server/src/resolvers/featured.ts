import { Query, Resolver } from "type-graphql";
import { Featured } from "../entities/Featured";

@Resolver()
export class FeaturedResolver {
  @Query(() => [Featured])
  async readFeaturedArticles(): Promise<Featured[]> {
    const data = await Featured.find({
      order: {
        position: "ASC",
      },
    });
    return data;
  }
}
