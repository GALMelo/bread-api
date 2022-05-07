import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockCategoryService } from './stock-category.service';
import { CreateStockCategoryDto } from '../dto/create-stock-category.dto';
import { UpdateStockCategoryDto } from '../dto/update-stock-category.dto';

@Controller('stock-category')
export class StockCategoryController {
  constructor(private readonly stockCategoryService: StockCategoryService) {}

  @Post()
  create(@Body() createStockCategoryDto: CreateStockCategoryDto) {
    return this.stockCategoryService.create(createStockCategoryDto);
  }

  @Get()
  findAll() {
    return this.stockCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockCategoryDto: UpdateStockCategoryDto,
  ) {
    return this.stockCategoryService.update(+id, updateStockCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockCategoryService.remove(+id);
  }
}
