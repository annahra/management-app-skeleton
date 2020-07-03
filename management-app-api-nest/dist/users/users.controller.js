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
const user_dto_1 = require("./dto/user.dto");
const users_service_1 = require("./users.service");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const role_guard_1 = require("./../auth/role.guard");
const platform_express_1 = require("@nestjs/platform-express");
const multer_config_1 = require("../config/multer.config");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    addUser(res, createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.addUser(createUserDto);
            return res.status(common_1.HttpStatus.OK).json({
                message: "User has been created successfully",
                user
            });
        });
    }
    getAllUser(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getAllUser();
            return res.status(common_1.HttpStatus.OK).json(users);
        });
    }
    getAllTeacher(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getAllTeachers();
            return res.status(common_1.HttpStatus.OK).json(users);
        });
    }
    getUser(res, userID) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.getUser(userID);
            if (!user)
                throw new common_1.NotFoundException('User does not exist!');
            return res.status(common_1.HttpStatus.OK).json(user);
        });
    }
    updateUser(res, userID, createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.updateUser(userID, createUserDto);
            if (!user)
                throw new common_1.NotFoundException('User does not exist!');
            return res.status(common_1.HttpStatus.OK).json({
                message: 'User has been successfully updated',
                user
            });
        });
    }
    deleteUser(res, userID) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.deleteUser(userID);
            if (!user)
                throw new common_1.NotFoundException('User does not exist');
            return res.status(common_1.HttpStatus.OK).json({
                message: 'User has been deleted',
                user
            });
        });
    }
    uploadAvatar(userId, file, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = req.protocol + "://" + req.get("host") + "/users/" + file.path;
            const user = yield this.userService.updateUser(userId, { avatar: url });
            if (!user)
                throw new common_1.NotFoundException('User does not exist');
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Avatar updated',
                user
            });
        });
    }
    getAvatar(fileId, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.sendFile(fileId, { root: 'imgs' });
        });
    }
};
__decorate([
    common_1.UseGuards(passport_1.AuthGuard(), role_guard_1.RoleGuard),
    role_guard_1.Roles('PRINCIPAL'),
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addUser", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard(), role_guard_1.RoleGuard),
    role_guard_1.Roles('PRINCIPAL'),
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUser", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard()),
    common_1.Get('teachers'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllTeacher", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard()),
    common_1.Get(':userID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard(), role_guard_1.RoleGuard),
    role_guard_1.Roles('PRINCIPAL'),
    common_1.Put(':userID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('userID')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard(), role_guard_1.RoleGuard),
    role_guard_1.Roles('PRINCIPAL'),
    common_1.Delete(':userID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard(), role_guard_1.RoleGuard),
    role_guard_1.Roles('PRINCIPAL'),
    common_1.Post(':id/avatar'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', multer_config_1.multerOptions)),
    __param(0, common_1.Param('id')), __param(1, common_1.UploadedFile()), __param(2, common_1.Req()), __param(3, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "uploadAvatar", null);
__decorate([
    common_1.Get('imgs/:fileId'),
    __param(0, common_1.Param('fileId')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAvatar", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map