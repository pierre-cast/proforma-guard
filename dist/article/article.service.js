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
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const article_Entity_1 = require("./entities/article.Entity");
let ArticleService = class ArticleService {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    async getMyArticles(id) {
        return await this.articleRepository.find({
            join: {
                alias: "article",
                leftJoinAndSelect: {
                    author: "article.author",
                    user: "author.user"
                }
            },
        });
    }
    async getAllArticles() {
        return await this.articleRepository.find();
    }
    async getArticleById(id) {
        return await this.articleRepository.findOne(id);
    }
    async addArticle(article) {
        return await this.articleRepository.save(Object.assign(Object.assign({}, article), { author: { id: article.authorId } }));
    }
    async updateArticle(id, article) {
        const newArticle = await this.articleRepository.preload(Object.assign(Object.assign({ id }, article), { author: { id: article.authorId } }));
        if (!newArticle) {
            throw new common_1.NotFoundException(`Article ${id} inexistant`);
        }
        return await this.articleRepository.save(newArticle);
    }
    async removeArticle(id) {
        const articleToRemove = await this.articleRepository.findOne(id);
        if (!articleToRemove) {
            throw new common_1.NotFoundException(`Article ${id} inexistant`);
        }
        this.articleRepository.remove(articleToRemove);
    }
};
ArticleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(article_Entity_1.ArticleEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map