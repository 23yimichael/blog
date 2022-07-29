import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Author } from "./Author";

@ObjectType()
@Entity()
export class Article extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  img!: string;

  @Field()
  @Column()
  genre!: "Music" | "Film/TV";

  @Field()
  @Column()
  date!: string;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  text!: string;

  @Field(() => [Author])
  @OneToMany(() => Author, (author) => author.articles, { lazy: true })
  authors!: Author[];

  @Field()
  @CreateDateColumn()
  createdAt!: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt!: Date;
}
