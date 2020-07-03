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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const role_guard_1 = require("./../auth/role.guard");
const news_service_1 = require("./news.service");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const create_news_dto_1 = require("./dto/create-news.dto");
let NewsController = class NewsController {
    constructor(newsService) {
        this.newsService = newsService;
    }
    add(res, createNewsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const news = yield this.newsService.add(createNewsDto);
            return res.status(common_1.HttpStatus.OK).json({
                message: "News has been created successfully",
                news
            });
        });
    }
    getAll(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const news = yield this.newsService.getAll();
            return res.status(common_1.HttpStatus.OK).json(news);
        });
    }
    get(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const news = yield this.newsService.get(id);
            if (!news)
                throw new common_1.NotFoundException('News does not exist!');
            return res.status(common_1.HttpStatus.OK).json(news);
        });
    }
    delete(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const news = yield this.newsService.delete(id);
            if (!news)
                throw new common_1.NotFoundException('User does not exist');
            return res.status(common_1.HttpStatus.OK).json({
                message: 'News has been deleted',
                news
            });
        });
    }
};
__decorate([
    common_1.UseGuards(passport_1.AuthGuard(), role_guard_1.RoleGuard),
    role_guard_1.Roles('PRINCIPAL'),
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_news_dto_1.CreateNewsDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "add", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard()),
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "getAll", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard()),
    common_1.Get(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "get", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard(), role_guard_1.RoleGuard),
    role_guard_1.Roles('PRINCIPAL'),
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "delete", null);
NewsController = __decorate([
    common_1.Controller('news'),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsController);
exports.NewsController = NewsController;
//# sourceMappingURL=news.controller.js.map