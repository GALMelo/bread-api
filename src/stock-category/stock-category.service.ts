import { Injectable } from '@nestjs/common';
import { CreateStockCategoryDto } from '../dto/create-stock-category.dto';
import { UpdateStockCategoryDto } from '../dto/update-stock-category.dto';

@Injectable()
export class StockCategoryService {
  create(createStockCategoryDto: CreateStockCategoryDto) {
    return 'This action adds a new stockCategory';
  }

  findAll() {
    return `This action returns all stockCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockCategory`;
  }

  update(id: number, updateStockCategoryDto: UpdateStockCategoryDto) {
    return `This action updates a #${id} stockCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockCategory`;
  }
}
