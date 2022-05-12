import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { StockCategory } from './stock-category.entity';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id_stock: string;

  @ManyToOne(() => StockCategory, {
    onDelete: 'CASCADE',
  })
  category_stock: StockCategory;

  @Column()
  name: string;

  @Column({ default: 100 })
  qty?: number;

  @Column()
  dt_buy: Date;

  @Column()
  dt_last_buy: Date;

  @Column()
  last_buy_qty: number;
}
