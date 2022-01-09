import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { getRepository } from 'typeorm';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
=======
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { getRepository } from 'typeorm';
>>>>>>> e9549c2ce50ccb47c5041f7022ce462043a1f230
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
<<<<<<< HEAD
  async findAll() {
    try {
      const result = await getRepository(Category)
        .createQueryBuilder('category')
        .getMany();

      return { categories: result };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message,
        },
        HttpStatus.FORBIDDEN,
=======
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const newCategory = getRepository(Category).create();
      newCategory.name = createCategoryDto.name;
      const saveCategory = await getRepository(Category).save(newCategory);
      return saveCategory;
    } catch (error) {
      throw new HttpException (
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
      return await getRepository(Category).find();
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

  async findOne(id: number) {
    try {
      return await getRepository(Category).findOne({ id });
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

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      let categoryToUpdate = await getRepository(Category).findOne({ id });
      categoryToUpdate.name = updateCategoryDto.name;
      return await getRepository(Category).save(categoryToUpdate);
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

  async remove(id: number) {
    try {
      let categoryToRemove = await getRepository(Category).findOne({ id });
      return await getRepository(Category).remove(categoryToRemove);
    } catch (error) {
      throw new HttpException (
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
>>>>>>> e9549c2ce50ccb47c5041f7022ce462043a1f230
      );
    }
  }
}
