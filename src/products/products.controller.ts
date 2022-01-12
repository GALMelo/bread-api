import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from '../dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(@Query() query) {
    return this.productsService.findAll(query);
  }

  @Get('/:id')
  findOne(@Param('id') id) {
    return this.productsService.findOne(id);
  }
}
