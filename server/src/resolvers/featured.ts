import { Query, Resolver } from "type-graphql";
import { Featured } from "../entities/Featured";

@Resolver()
export class FeaturedResolver {
  //needs ability to change featured articles

  @Query(() => [Featured])
  async readFeaturedArticles(): Promise<Featured[]> {
    const data = await Featured.find();
    return data;
  }
}
