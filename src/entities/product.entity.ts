import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Category, {
    onDelete: 'CASCADE',
  })
  category: Category;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @Column()
  image_url: string;

  @Column({ default: 100 })
  qty?: number;

  @Column({ default: 0 })
  sold?: number;
}
