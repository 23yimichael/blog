"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleResolver = void 0;
const date_fns_1 = require("date-fns");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Article_1 = require("../entities/Article");
const types_1 = require("../utils/types");
let ArticleResolver = class ArticleResolver {
    async readFeaturedArticles() {
        const data = await Article_1.Article.find({
            order: {
                featured: "DESC",
            },
        });
        if (data[2].featured === -1) {
            return null;
        }
        return [data[2], data[1], data[0]];
    }
    async readArticles(genre, take) {
        let data;
        if (take) {
            data = await Article_1.Article.find({
                where: { genre },
                order: {
                    createdAt: "DESC",
                },
                take,
            });
        }
        else {
            data = await Article_1.Article.find({
                where: { genre },
                order: {
                    createdAt: "DESC",
                },
            });
        }
        return data;
    }
    async readArticle(id) {
        const article = await Article_1.Article.findOne({ where: { id } });
        return article;
    }
    async deleteArticle(id) {
        await Article_1.Article.delete({ id });
        return true;
    }
    async updateArticle(id, title, genre, img, text, featured) {
        if (img.length === 0) {
            return {
                error: {
                    field: "Image",
                    message: "You must have a link to the image!",
                },
            };
        }
        else if (title.length === 0) {
            return {
                error: {
                    field: "Title",
                    message: "You must have a title!",
                },
            };
        }
        else if (text.length === 0) {
            return {
                error: {
                    field: "Text",
                    message: "You must submit text!",
                },
            };
        }
        else if (genre.length === 0) {
            return {
                error: {
                    field: "Genre",
                    message: "You must select a genre!",
                },
            };
        }
        if (featured >= 0) {
            const cur = await Article_1.Article.findOne({ where: { featured } });
            if (cur) {
                await (0, typeorm_1.getConnection)()
                    .getRepository(Article_1.Article)
                    .createQueryBuilder()
                    .update({ featured: -1 })
                    .where({ id: cur.id })
                    .returning("*")
                    .execute();
            }
            await (0, typeorm_1.getConnection)()
                .getRepository(Article_1.Article)
                .createQueryBuilder()
                .update({ title, genre, img, text, featured })
                .where({ id })
                .returning("*")
                .execute();
        }
        else {
            await (0, typeorm_1.getConnection)()
                .getRepository(Article_1.Article)
                .createQueryBuilder()
                .update({ title, genre, img, text })
                .where({ id })
                .returning("*")
                .execute();
        }
        const article = await Article_1.Article.findOne({ where: { id } });
        return { article };
    }
    async createArticle(title, genre, img, text) {
        if (img.length === 0) {
            return {
                error: {
                    field: "Image",
                    message: "You must have a link to the image!",
                },
            };
        }
        else if (title.length === 0) {
            return {
                error: {
                    field: "Title",
                    message: "You must have a title!",
                },
            };
        }
        else if (text.length === 0) {
            return {
                error: {
                    field: "Text",
                    message: "You must submit text!",
                },
            };
        }
        else if (genre.length === 0) {
            return {
                error: {
                    field: "Genre",
                    message: "You must select a genre!",
                },
            };
        }
        const article = await Article_1.Article.create({
            img,
            genre,
            date: (0, date_fns_1.format)(new Date(), "MMMM do, yyyy").toUpperCase(),
            title,
            text,
            featured: -1,
        }).save();
        return { article };
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Article_1.Article]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "readFeaturedArticles", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Article_1.Article]),
    __param(0, (0, type_graphql_1.Arg)("genre")),
    __param(1, (0, type_graphql_1.Arg)("take", () => type_graphql_1.Int, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "readArticles", null);
__decorate([
    (0, type_graphql_1.Query)(() => Article_1.Article),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "readArticle", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "deleteArticle", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.ArticleResponse),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("title")),
    __param(2, (0, type_graphql_1.Arg)("genre")),
    __param(3, (0, type_graphql_1.Arg)("img")),
    __param(4, (0, type_graphql_1.Arg)("text")),
    __param(5, (0, type_graphql_1.Arg)("featured", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, Number]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "updateArticle", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.ArticleResponse),
    __param(0, (0, type_graphql_1.Arg)("title")),
    __param(1, (0, type_graphql_1.Arg)("genre")),
    __param(2, (0, type_graphql_1.Arg)("img")),
    __param(3, (0, type_graphql_1.Arg)("text")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "createArticle", null);
ArticleResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ArticleResolver);
exports.ArticleResolver = ArticleResolver;
//# sourceMappingURL=article.js.map