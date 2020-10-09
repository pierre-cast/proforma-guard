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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt_1 = require("bcrypt");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAllUser() {
        return await this.userRepository.find();
    }
    async getFreeUsers() {
        return await this.userRepository.query(`
            SELECT * FROM public."user"
            WHERE id NOT IN (
                SELECT u.id FROM public."user" as u 
                INNER JOIN "author" a  ON a."userId" = u.id
            )
        `);
    }
    async getMyUserProfile(id) {
        return await this.userRepository.find({
            where: { "id": id }
        });
    }
    async getUserById(id) {
        return await this.userRepository.findOne(id);
    }
    async getUserByName(username) {
        return await this.userRepository.findOne({ username });
    }
    async updateUser(id, user) {
        if (user.password) {
            user.password = await bcrypt_1.hash(user.password, 10);
        }
        const newUser = await this.userRepository.preload(Object.assign({ id }, user));
        if (!newUser) {
            throw new common_1.NotFoundException(`User ${id} inexistant`);
        }
        return await this.userRepository.save(newUser);
    }
    async removeUser(id) {
        const userToRemove = await this.userRepository.findOne(id);
        if (!userToRemove) {
            throw new common_1.NotFoundException(`User ${id} inexistant`);
        }
        this.userRepository.remove(userToRemove);
    }
    async subscribe(userData) {
        const user = this.userRepository.create(Object.assign({}, userData));
        user.password = await bcrypt_1.hash(user.password, 10);
        try {
            let createdUser = await this.userRepository.save(user);
            delete createdUser.password;
            return createdUser;
        }
        catch (e) {
            throw new common_1.ConflictException(`le Username et le Password doivent être unique`);
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map