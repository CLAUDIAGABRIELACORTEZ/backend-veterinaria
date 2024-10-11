import { Body, Controller, Get, HttpCode, HttpStatus, Patch, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthLoginInDto, UpdateHashDto } from "./dto";
import { JwtGuard, RolesGuard } from "./guard";
import { Role, Roles } from "./decorator";



@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')  // {{local}}/auth/login
    login(@Body() dto: AuthLoginInDto) {
        return this.authService.login(dto);
    }
    
    @HttpCode(HttpStatus.OK)
    @UseGuards(JwtGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.CLIENT, Role.VETDOC)
    @Post('logout')  // {{local}}/auth/logout
    logout(@Request() req) {
        return this.authService.logout(req);
    }

    // @HttpCode(HttpStatus.OK)
    // @UseGuards(JwtGuard, RolesGuard)
    // @Roles(Role.ADMIN, Role.CLIENT, Role.VETDOC)
    // @Patch('updateHash')
    // async updateHash(@Body() dto: UpdateHashDto) {
    //     return await this.authService.updateHash(dto);
    // }

    @HttpCode(HttpStatus.OK)
    @Patch('updateHash')
    async updateHash(@Body() dto: UpdateHashDto) {
        return await this.authService.updateHashV2(dto);
    }
}
