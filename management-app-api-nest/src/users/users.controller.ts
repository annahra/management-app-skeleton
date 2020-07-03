import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { Controller, Get, Res, HttpStatus, Post, Body, Put, NotFoundException, Delete, Param, UseGuards, UseInterceptors, UploadedFile, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard, Roles } from './../auth/role.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from '../config/multer.config';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @UseGuards(AuthGuard(), RoleGuard)
    @Roles('PRINCIPAL')
    @Post()
     async addUser(@Res() res, @Body() createUserDto: UserDto) {
         const user = await this.userService.addUser(createUserDto);
         return res.status(HttpStatus.OK).json({
             message: "User has been created successfully",
             user
         })
     }
 
     @UseGuards(AuthGuard(), RoleGuard)
     @Roles('PRINCIPAL')
     @Get()
     async getAllUser(@Res() res) {
         const users = await this.userService.getAllUser();
         return res.status(HttpStatus.OK).json(users);
     }
 
     @UseGuards(AuthGuard())
     @Get('teachers')
     async getAllTeacher(@Res() res) {
         const users = await this.userService.getAllTeachers();
         return res.status(HttpStatus.OK).json(users);
     }

     @UseGuards(AuthGuard())
     @Get(':userID')
     async getUser(@Res() res, @Param('userID') userID) {
         const user = await this.userService.getUser(userID);
         if (!user) throw new NotFoundException('User does not exist!');
         return res.status(HttpStatus.OK).json(user);
     }

    @UseGuards(AuthGuard(), RoleGuard)
    @Roles('PRINCIPAL')
    @Put(':userID')
    async updateUser(@Res() res, @Param('userID') userID, @Body() createUserDto: UserDto) {
        const user = await this.userService.updateUser(userID, createUserDto);
        if (!user) throw new NotFoundException('User does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'User has been successfully updated',
            user
        });
    }

    @UseGuards(AuthGuard(), RoleGuard)
    @Roles('PRINCIPAL')
    @Delete(':userID')
    async deleteUser(@Res() res, @Param('userID') userID) {
        const user = await this.userService.deleteUser(userID);
        if (!user) throw new NotFoundException('User does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'User has been deleted',
            user
        })
    }

    @UseGuards(AuthGuard(), RoleGuard)
    @Roles('PRINCIPAL')
    @Post(':id/avatar')
    @UseInterceptors(FileInterceptor('file', multerOptions))
    async uploadAvatar(@Param('id') userId, @UploadedFile() file, @Req() req, @Res() res) {
        let url = req.protocol + "://" + req.get("host") + "/users/" + file.path;

        const user = await this.userService.updateUser(userId, {avatar: url});
        if (!user) throw new NotFoundException('User does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Avatar updated',
            user
        })        
    }

    // @UseGuards(AuthGuard())
    @Get('imgs/:fileId')
    async getAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
      res.sendFile(fileId, { root: 'imgs'});
    }
}
