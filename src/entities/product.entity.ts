import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Category)
  category: Category;

  @Column()
  description: string;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @Column()
  qty: number;

  @Column()
  sold: number;
}
