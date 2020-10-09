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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorEntity = void 0;
const article_entity_1 = require("../../article/entities/article.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let AuthorEntity = class AuthorEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], AuthorEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        length: 50,
    }),
    __metadata("design:type", String)
], AuthorEntity.prototype, "familyname", void 0);
__decorate([
    typeorm_1.Column({
        length: 50,
    }),
    __metadata("design:type", String)
], AuthorEntity.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column({
        length: 50,
    }),
    __metadata("design:type", String)
], AuthorEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], AuthorEntity.prototype, "presentation", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], AuthorEntity.prototype, "active", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: true
    }),
    __metadata("design:type", Number)
], AuthorEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_entity_1.UserEntity, {
        eager: true
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", user_entity_1.UserEntity)
], AuthorEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(type => article_entity_1.ArticleEntity, (article) => article.author, {
        cascade: true,
        nullable: true
    }),
    __metadata("design:type", Array)
], AuthorEntity.prototype, "articles", void 0);
AuthorEntity = __decorate([
    typeorm_1.Entity('author')
], AuthorEntity);
exports.AuthorEntity = AuthorEntity;
//# sourceMappingURL=author.entity.js.map