import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Category } from '../entities/category.entity';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  async create(product: CreateProductDto) {
    try {
      const newProduct = getRepository(Product).create();

      const category = await getRepository(Category).findOne({
        id: product.categoryId,
      });

      newProduct.category = category;
      newProduct.description = product.description;
      newProduct.price = product.price;
      newProduct.qty = product.qty;

      const saveProd = await getRepository(Product).save(newProduct);

      return saveProd;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async findAll() {
    try {
      const result = await getRepository(Product)
        .createQueryBuilder('product')
        .getMany();

      return { products: result };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
