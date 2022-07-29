import { Field, ObjectType } from "type-graphql";
import { Article } from "../entities/Article";
import { Author } from "../entities/Author";

@ObjectType()
class Error {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
export class UserResponse {
  @Field(() => Author, { nullable: true })
  user?: Author;

  @Field(() => Error, { nullable: true })
  error?: Error;
}

@ObjectType()
export class ArticleResponse {
  @Field(() => Article, { nullable: true })
  article?: Article;

  @Field(() => Error, { nullable: true })
  error?: Error;
}
