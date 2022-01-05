import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';
import { getRepository } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class ProductsService {
  async create(createProductDto: CreateProductDto) {
    
    try {
      const category = await getRepository(Category).findOne({ id: createProductDto.category_id });
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
      throw new HttpException (
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

  }

  findAll() {
    return `This action returns all products`;
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
