import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Article } from "./Article";

@ObjectType()
@Entity()
export class Author extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  username!: string;

  @Column()
  password!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  pfp!: string;

  @Field()
  @Column()
  bio!: string;

  @Field(() => [Article])
  @ManyToMany(() => Article, (article) => article.authors, {
    lazy: true,
    nullable: true,
  })
  articles!: Article[];

  @Field()
  @CreateDateColumn()
  createdAt!: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt!: Date;
}
