import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { Product } from './entities/product.entity';
import { Category } from './entities/category.entity';

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Product, Category],
      synchronize: true,
      logging: ['error'],
    }),
    UsersModule,
    ProductsModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
