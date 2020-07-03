"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = require("@nestjs/passport");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const news_controller_1 = require("./news.controller");
const news_service_1 = require("./news.service");
const news_schema_1 = require("./schemas/news.schema");
let NewsModule = class NewsModule {
};
NewsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'News', schema: news_schema_1.NewsSchema }]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt', session: false })
        ],
        controllers: [news_controller_1.NewsController],
        providers: [news_service_1.NewsService]
    })
], NewsModule);
exports.NewsModule = NewsModule;
//# sourceMappingURL=news.module.js.map