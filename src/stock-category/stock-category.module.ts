import { Module } from '@nestjs/common';
import { StockCategoryService } from './stock-category.service';
import { StockCategoryController } from './stock-category.controller';

@Module({
  controllers: [StockCategoryController],
  providers: [StockCategoryService]
})
export class StockCategoryModule {}
