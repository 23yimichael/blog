import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Article = {
  __typename?: 'Article';
  authors: Array<Author>;
  createdAt: Scalars['DateTime'];
  date: Scalars['String'];
  genre: Scalars['String'];
  id: Scalars['Float'];
  img: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ArticleResponse = {
  __typename?: 'ArticleResponse';
  article?: Maybe<Article>;
  error?: Maybe<Error>;
};

export type Author = {
  __typename?: 'Author';
  articles: Array<Article>;
  bio: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  name: Scalars['String'];
  pfp: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type Error = {
  __typename?: 'Error';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Featured = {
  __typename?: 'Featured';
  article: Article;
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  position: Scalars['Float'];
  updateAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: ArticleResponse;
  deleteArticle: Scalars['Boolean'];
  login: UserResponse;
  register: Author;
  updateArticle: ArticleResponse;
};


export type MutationCreateArticleArgs = {
  genre: Scalars['String'];
  img: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
};


export type MutationDeleteArticleArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterArgs = {
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdateArticleArgs = {
  genre: Scalars['String'];
  id: Scalars['Int'];
  img: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  readAboutUs: Array<Author>;
  readArticle: Article;
  readArticles: Array<Article>;
  readFeaturedArticles: Array<Featured>;
};


export type QueryReadArticleArgs = {
  id: Scalars['Int'];
};


export type QueryReadArticlesArgs = {
  genre: Scalars['String'];
  take?: InputMaybe<Scalars['Int']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  error?: Maybe<Error>;
  user?: Maybe<Author>;
};

export type CreateArticleMutationVariables = Exact<{
  title: Scalars['String'];
  genre: Scalars['String'];
  img: Scalars['String'];
  text: Scalars['String'];
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', createArticle: { __typename?: 'ArticleResponse', error?: { __typename?: 'Error', field: string, message: string } | null, article?: { __typename?: 'Article', id: number } | null } };

export type DeleteArticleMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteArticleMutation = { __typename?: 'Mutation', deleteArticle: boolean };

export type UpdateArticleMutationVariables = Exact<{
  id: Scalars['Int'];
  title: Scalars['String'];
  genre: Scalars['String'];
  img: Scalars['String'];
  text: Scalars['String'];
}>;


export type UpdateArticleMutation = { __typename?: 'Mutation', updateArticle: { __typename?: 'ArticleResponse', error?: { __typename?: 'Error', field: string, message: string } | null, article?: { __typename?: 'Article', id: number } | null } };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', user?: { __typename?: 'Author', id: number } | null, error?: { __typename?: 'Error', field: string, message: string } | null } };

export type ReadAboutUsQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadAboutUsQuery = { __typename?: 'Query', readAboutUs: Array<{ __typename?: 'Author', id: number, name: string, bio: string, pfp: string }> };

export type ReadArticleQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ReadArticleQuery = { __typename?: 'Query', readArticle: { __typename?: 'Article', id: number, img: string, genre: string, date: string, title: string, text: string } };

export type ReadArticlesQueryVariables = Exact<{
  genre: Scalars['String'];
  take?: InputMaybe<Scalars['Int']>;
}>;


export type ReadArticlesQuery = { __typename?: 'Query', readArticles: Array<{ __typename?: 'Article', id: number, img: string, genre: string, date: string, title: string, text: string }> };

export type ReadFeaturedArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadFeaturedArticlesQuery = { __typename?: 'Query', readFeaturedArticles: Array<{ __typename?: 'Featured', id: number, position: number, article: { __typename?: 'Article', id: number, img: string, genre: string, date: string, title: string, text: string } }> };


export const CreateArticleDocument = gql`
    mutation createArticle($title: String!, $genre: String!, $img: String!, $text: String!) {
  createArticle(title: $title, genre: $genre, img: $img, text: $text) {
    error {
      field
      message
    }
    article {
      id
    }
  }
}
    `;

export function useCreateArticleMutation() {
  return Urql.useMutation<CreateArticleMutation, CreateArticleMutationVariables>(CreateArticleDocument);
};
export const DeleteArticleDocument = gql`
    mutation deleteArticle($id: Int!) {
  deleteArticle(id: $id)
}
    `;

export function useDeleteArticleMutation() {
  return Urql.useMutation<DeleteArticleMutation, DeleteArticleMutationVariables>(DeleteArticleDocument);
};
export const UpdateArticleDocument = gql`
    mutation updateArticle($id: Int!, $title: String!, $genre: String!, $img: String!, $text: String!) {
  updateArticle(id: $id, title: $title, genre: $genre, img: $img, text: $text) {
    error {
      field
      message
    }
    article {
      id
    }
  }
}
    `;

export function useUpdateArticleMutation() {
  return Urql.useMutation<UpdateArticleMutation, UpdateArticleMutationVariables>(UpdateArticleDocument);
};
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    user {
      id
    }
    error {
      field
      message
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const ReadAboutUsDocument = gql`
    query readAboutUs {
  readAboutUs {
    id
    name
    bio
    pfp
  }
}
    `;

export function useReadAboutUsQuery(options?: Omit<Urql.UseQueryArgs<ReadAboutUsQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadAboutUsQuery, ReadAboutUsQueryVariables>({ query: ReadAboutUsDocument, ...options });
};
export const ReadArticleDocument = gql`
    query readArticle($id: Int!) {
  readArticle(id: $id) {
    id
    img
    genre
    date
    title
    text
  }
}
    `;

export function useReadArticleQuery(options: Omit<Urql.UseQueryArgs<ReadArticleQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadArticleQuery, ReadArticleQueryVariables>({ query: ReadArticleDocument, ...options });
};
export const ReadArticlesDocument = gql`
    query readArticles($genre: String!, $take: Int) {
  readArticles(genre: $genre, take: $take) {
    id
    img
    genre
    date
    title
    text
  }
}
    `;

export function useReadArticlesQuery(options: Omit<Urql.UseQueryArgs<ReadArticlesQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadArticlesQuery, ReadArticlesQueryVariables>({ query: ReadArticlesDocument, ...options });
};
export const ReadFeaturedArticlesDocument = gql`
    query readFeaturedArticles {
  readFeaturedArticles {
    id
    position
    article {
      id
      img
      genre
      date
      title
      text
    }
  }
}
    `;

export function useReadFeaturedArticlesQuery(options?: Omit<Urql.UseQueryArgs<ReadFeaturedArticlesQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadFeaturedArticlesQuery, ReadFeaturedArticlesQueryVariables>({ query: ReadFeaturedArticlesDocument, ...options });
};