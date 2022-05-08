import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Stock } from './stock.entity';
@Entity()
export class StockCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Stock, (stock) => stock.category_stock, {
    cascade: true,
  })
  stocks: Stock[];
}
