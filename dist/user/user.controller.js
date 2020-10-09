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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorators_1 = require("../decorators/roles.decorators");
const user_decorators_1 = require("../decorators/user.decorators");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const role_guards_1 = require("../guards/role.guards");
const update_user_dto_1 = require("./dtos/update-user.dto");
const userSubscribeDto_1 = require("./dtos/userSubscribeDto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getMyUserProfile(user) {
        return await this.userService.getMyUserProfile(user.id);
    }
    async getFreeUsers() {
        return await this.userService.getFreeUsers();
    }
    async getUserById(id) {
        return await this.userService.getUserById(id);
    }
    async getAllUser() {
        return await this.userService.getAllUser();
    }
    async addUser(addUserDto) {
        return await this.userService.subscribe(addUserDto);
    }
    async updateUser(updateUserDto, id) {
        return await this.userService.updateUser(id, updateUserDto);
    }
    async removeUser(id) {
        return this.userService.removeUser(id);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guards_1.RolesGuard),
    roles_decorators_1.Roles('USER', 'AUTHOR', 'ADMIN'),
    common_1.Get('mes-acces'),
    __param(0, user_decorators_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getMyUserProfile", null);
__decorate([
    common_1.Get('free'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getFreeUsers", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, role_guards_1.RolesGuard),
    roles_decorators_1.Roles('ADMIN'),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUser", null);
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userSubscribeDto_1.UserSubscribeDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addUser", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "removeUser", null);
UserController = __decorate([
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map