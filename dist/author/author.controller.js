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
exports.AuthorController = void 0;
const common_1 = require("@nestjs/common");
const author_service_1 = require("./author.service");
const add_author_dto_1 = require("./dtos/add-author.dto");
const update_author_dto_1 = require("./dtos/update-author.dto");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const roles_decorators_1 = require("../decorators/roles.decorators");
const user_decorators_1 = require("../decorators/user.decorators");
const role_guards_1 = require("../guards/role.guards");
let AuthorController = class AuthorController {
    constructor(authorService) {
        this.authorService = authorService;
    }
    async getMyAuthorProfile(user) {
        return await this.authorService.getMyAuthorProfile(user.id);
    }
    async getAuthorById(id) {
        return await this.authorService.getAuthorById(id);
    }
    async getAllAuthors() {
        return await this.authorService.getAllAuthors();
    }
    async addAuthor(addAuthorDto) {
        return await this.authorService.addAuthor(addAuthorDto);
    }
    async updateAuthor(updateAuthorDto, id) {
        return await this.authorService.updateAuthor(id, updateAuthorDto);
    }
    async removeAuthor(id) {
        return this.authorService.removeAuthor(id);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guards_1.RolesGuard),
    roles_decorators_1.Roles('AUTHOR'),
    common_1.Get('mon-profil'),
    __param(0, user_decorators_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getMyAuthorProfile", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getAuthorById", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getAllAuthors", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_author_dto_1.AddAuthorDto]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "addAuthor", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_author_dto_1.UpdateAuthorDto, Number]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "updateAuthor", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "removeAuthor", null);
AuthorController = __decorate([
    common_1.Controller('author'),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorController);
exports.AuthorController = AuthorController;
//# sourceMappingURL=author.controller.js.map