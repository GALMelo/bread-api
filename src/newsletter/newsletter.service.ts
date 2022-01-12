import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreateNewsletterDto } from '../dto/create-newsletter.dto';
import { Newsletter } from '../entities/newsletter.entity';

@Injectable()
export class NewsletterService {
  async create(news: CreateNewsletterDto) {
    try {
      const newNews = getRepository(Newsletter).create();
      newNews.name = news.name;
      newNews.email = news.email;

      const saveNews = await getRepository(Newsletter).save(newNews);

      return saveNews;
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
}
