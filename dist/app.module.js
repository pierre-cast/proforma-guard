"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const dotenv = require("dotenv");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const article_module_1 = require("./article/article.module");
const author_module_1 = require("./author/author.module");
const google_module_1 = require("./google/google.module");
const google_service_1 = require("./google/google.service");
const google_strategy_1 = require("./strategies/google.strategy");
dotenv.config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: ["dist/**/*.entity{.ts,.js}"],
                synchronize: true,
                logging: true,
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true
            }),
            auth_module_1.AuthModule, user_module_1.UserModule, article_module_1.ArticleModule, author_module_1.AuthorModule, google_module_1.GoogleModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, google_service_1.GoogleService, google_strategy_1.GoogleStrategy],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map