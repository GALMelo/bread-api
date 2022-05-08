import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreateStockCategoryDto } from '../dto/create-stock-category.dto';
import { UpdateStockCategoryDto } from '../dto/update-stock-category.dto';
import { StockCategory } from '../entities/stock-category.entity';

@Injectable()
export class StockCategoryService {
  async create(createStockCategoryDto: CreateStockCategoryDto) {
    try {
      const newStockCategory = getRepository(StockCategory).create();
      newStockCategory.name = createStockCategoryDto.name;
      const saveStockCategory =
        getRepository(StockCategory).save(newStockCategory);
      return saveStockCategory;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  findAll() {
    try {
      return getRepository(StockCategory).find();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  update(id: number, updateStockCategoryDto: UpdateStockCategoryDto) {
    try {
      return getRepository(StockCategory).update(id, updateStockCategoryDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  remove(id: number) {
    try {
      return getRepository(StockCategory).delete(id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
