import argon2 from "argon2";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Author } from "../entities/Author";
import { UserResponse } from "../utils/types";

@Resolver()
export class AuthorResolver {
  @Mutation(() => Author)
  async register(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Arg("name") name: string
  ): Promise<Author> {
    const user = await Author.create({
      username,
      password: await argon2.hash(password),
      name,
      pfp: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }).save();
    return user;
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("username") username: string,
    @Arg("password") password: string
  ): Promise<UserResponse> {
    const user = await Author.findOne({ where: { username } });
    if (!user) {
      return {
        error: {
          field: "Username",
          message: "Username does not exist.",
        },
      };
    }

    const verified = await argon2.verify(user.password, password);
    if (!verified) {
      return {
        error: {
          field: "Password",
          message: "Incorrect password.",
        },
      };
    }

    return { user };
  }

  @Query(() => [Author])
  async readAboutUs(): Promise<Author[]> {
    const data = await Author.find();
    return data;
  }
}
