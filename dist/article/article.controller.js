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
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const article_service_1 = require("./article.service");
const add_article_dto_1 = require("./dtos/add-article.dto");
const update_article_dto_1 = require("./dtos/update-article.dto");
const auth_service_1 = require("../auth/auth.service");
const author_service_1 = require("../author/author.service");
const roles_decorators_1 = require("../decorators/roles.decorators");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const role_guards_1 = require("../guards/role.guards");
const user_decorators_1 = require("../decorators/user.decorators");
const user_entity_1 = require("../user/entities/user.entity");
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async getMyArticles(user) {
        console.log('user', user);
        return await this.articleService.getMyArticles(user.id);
    }
    async getArticleById(id) {
        return await this.articleService.getArticleById(id);
    }
    async getAllArticles() {
        return await this.articleService.getAllArticles();
    }
    async addArticle(addArticleDto) {
        return await this.articleService.addArticle(addArticleDto);
    }
    async updateArticle(updateArticleDto, id) {
        return await this.articleService.updateArticle(id, updateArticleDto);
    }
    async removeArticle(id) {
        return this.articleService.removeArticle(id);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    roles_decorators_1.Roles('AUTHOR'),
    common_1.Get('mes-articles'),
    __param(0, user_decorators_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getMyArticles", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticleById", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getAllArticles", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_article_dto_1.AddArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "addArticle", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_article_dto_1.UpdateArticleDto, Number]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "updateArticle", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "removeArticle", null);
ArticleController = __decorate([
    common_1.Controller('article'),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
exports.ArticleController = ArticleController;
//# sourceMappingURL=article.controller.js.map