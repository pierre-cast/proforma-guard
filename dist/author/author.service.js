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
exports.AuthorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const author_entity_1 = require("./entities/author.entity");
let AuthorService = class AuthorService {
    constructor(authorRepository) {
        this.authorRepository = authorRepository;
    }
    async getAllAuthors() {
        return await this.authorRepository.find();
    }
    async getMyAuthorProfile(id) {
        return await this.authorRepository.find({
            join: {
                alias: "author",
                leftJoinAndSelect: {
                    user: "author.user"
                }
            },
            where: { "userId": id }
        });
    }
    async getAuthorById(id) {
        return await this.authorRepository.findOne(id);
    }
    async addAuthor(author) {
        return await this.authorRepository.save(author);
    }
    async updateAuthor(id, author) {
        const newAuthor = await this.authorRepository.preload(Object.assign({ id }, author));
        if (!newAuthor) {
            throw new common_1.NotFoundException(`Auteur ${id} inexistant`);
        }
        return await this.authorRepository.save(newAuthor);
    }
    async removeAuthor(id) {
        const authorToRemove = await this.authorRepository.findOne(id);
        if (!authorToRemove) {
            throw new common_1.NotFoundException(`Auteur ${id} inexistant`);
        }
        this.authorRepository.remove(authorToRemove);
    }
};
AuthorService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(author_entity_1.AuthorEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthorService);
exports.AuthorService = AuthorService;
//# sourceMappingURL=author.service.js.map