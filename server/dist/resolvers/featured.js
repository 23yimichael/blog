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
exports.FeaturedResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Featured_1 = require("../entities/Featured");
let FeaturedResolver = class FeaturedResolver {
    async readFeaturedArticles() {
        const data = await Featured_1.Featured.find({
            order: {
                position: "ASC",
            },
        });
        return data;
    }
    async updateFeaturedArticle(id, position) {
        const cur = await Featured_1.Featured.findOne({ where: { position } });
        if (cur) {
            await Featured_1.Featured.delete({ position });
        }
        await Featured_1.Featured.create({ position, articleId: id }).save();
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Featured_1.Featured]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FeaturedResolver.prototype, "readFeaturedArticles", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("position", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FeaturedResolver.prototype, "updateFeaturedArticle", null);
FeaturedResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], FeaturedResolver);
exports.FeaturedResolver = FeaturedResolver;
//# sourceMappingURL=featured.js.map