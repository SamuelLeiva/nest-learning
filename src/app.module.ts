import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { UsersController } from './users/users.controller';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    username: 'root',
    password: '123456',
    host: 'localhost',
    port: 3306,
    database: 'nestdb',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
  }),
    UsersModule,
    PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(UsersController)
  }
}
