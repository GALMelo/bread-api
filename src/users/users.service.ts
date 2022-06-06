import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
var bcrypt = require('bcryptjs');

@Injectable()
export class UsersService {
  async create(user: CreateUserDto) {
    try {

      const userData = await getRepository(User).findOne({
        where: { email: user.email },
      });

      if (userData) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'User already exists.',
          },
          HttpStatus.FORBIDDEN,
        );
      }

      const newUser = getRepository(User).create();

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);

      newUser.firstName = user.firstName;
      newUser.lastName = user.lastName;
      newUser.phoneNumber = user.phoneNumber;
      newUser.password = hash;
      newUser.email = user.email;
      newUser.type_user = user.typeUser;

      const saveUser = await getRepository(User).save(newUser);

      if (saveUser) return {
        id: saveUser.id,
        name: saveUser.firstName + ' ' + saveUser.lastName,
        phoneNumber: saveUser.phoneNumber,
        email: saveUser.email,
        typeUser: saveUser.type_user,
      };
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

  async login(body) {
    const userData = await getRepository(User).findOne({
      where: { email: body.email },
    });
    if (userData) {
      let result = await bcrypt.compare(String(body.password), userData.password);
      if (result) return {
        id: userData.id,
        name: userData.firstName + ' ' + userData.lastName,
        phoneNumber: userData.phoneNumber,
        email: userData.email,
        typeUser: userData.type_user,
      };

      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalidate data.',
        },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return 'User not found';
    }
  }
}
