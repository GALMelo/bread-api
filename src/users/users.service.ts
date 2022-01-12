import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
var bcrypt = require('bcryptjs');

@Injectable()
export class UsersService {
  async create(user: CreateUserDto) {
    try {
      const newUser = getRepository(User).create();

      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, async function (err, hash) {
          newUser.firstName = user.firstName;
          newUser.lastName = user.lastName;
          newUser.password = hash;
          newUser.email = user.email;
          newUser.tipo_user = user.tipoUser;

          const saveUser = await getRepository(User).save(newUser);

          return saveUser;
        });
      });
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
      bcrypt.compare(body.password, userData.password, function (err, res) {
        if (err) {
          return err;
        } else {
          return userData;
        }
      });
    } else {
      return 'User not found';
    }
  }
}
