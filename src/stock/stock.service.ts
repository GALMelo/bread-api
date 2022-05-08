import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { getRepository, Like } from 'typeorm';
import { CreateStockDto } from '../dto/create-stock.dto';
import { UpdateStockDto } from '../dto/update-stock.dto';
import { StockCategory } from '../entities/stock-category.entity';
import { Stock } from '../entities/stock.entity';

@Injectable()
export class StockService {
  async create(createStockDto: CreateStockDto) {
    try {
      const stockCategory = await getRepository(StockCategory).findOne({
        id: createStockDto.category_stock_id,
      });
      if (stockCategory) {
        const newStock = getRepository(Stock).create();
        newStock.category_stock = stockCategory;
        newStock.name = createStockDto.name;
        newStock.qty = createStockDto.qty;
        newStock.dt_last_buy = createStockDto.dt_last_buy;
        newStock.last_buy_qty = createStockDto.last_buy_qty;
        const saveStock = await getRepository(Stock).save(newStock);
        return saveStock;
      } else {
        throw new Error('Category not found.');
      }
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

  async find(query: any) {
    try {
      return await getRepository(Stock).find({
        relations: ['category_stock'],
        where:
          Object.keys(query).length > 0 && (query.category || query.search)
            ? {
                category: query.category ? { name: query.category } : {},
                name: query.search ? Like(`%${query.search}%`) : Like('%%'),
              }
            : {},
        take:
          Object.keys(query).length > 0 && query.limit
            ? Number(query.limit)
            : 0,
      });
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

  async findOne(id: number) {
    try {
      return await getRepository(Stock).findOneOrFail(id, {
        relations: ['category_stock'],
      });
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

  update(id: number, updateStockDto: UpdateStockDto) {
    try {
      return getRepository(Stock).update(id, updateStockDto);
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
      return getRepository(Stock).delete(id);
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
