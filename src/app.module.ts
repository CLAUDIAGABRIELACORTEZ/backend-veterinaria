import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ExampleModule } from './example/example.module';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';



@Module({
    imports: [PrismaModule, 
              ConfigModule.forRoot({ isGlobal: true }), 
              PrismaModule, 
              AuthModule,
              JwtModule,
              ExampleModule,
              AdminModule,
              ClientModule],
    controllers: [AppController, AuthController],
    providers: [AppService, AuthService],
})
export class AppModule {}
