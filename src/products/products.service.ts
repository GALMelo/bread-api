import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../entities/product.entity';
import { getRepository, Like } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class ProductsService {
  async create(createProductDto: CreateProductDto) {
    try {
      const category = await getRepository(Category).findOne({
        id: createProductDto.category_id,
      });
      if (category) {
        const newProduct = getRepository(Product).create();
        newProduct.category = category;
        newProduct.name = createProductDto.name;
        newProduct.description = createProductDto.description;
        newProduct.price = createProductDto.price;
        newProduct.image_url = createProductDto.image_url;
        const saveProduct = await getRepository(Product).save(newProduct);
        return saveProduct;
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

  async findAll(query: any) {
    try {
      return await getRepository(Product).find({
        relations: ['category'],
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
      return await getRepository(Product).findOne(id, {
        relations: ['category'],
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
}
