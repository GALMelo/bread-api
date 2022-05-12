import { ApiProperty } from '@nestjs/swagger';

export class CreateStockDto {
  @ApiProperty({ type: Number })
  category_stock_id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Number })
  qty?: number;

  @ApiProperty({ type: Date })
  dt_buy: Date;

  @ApiProperty({ type: Date })
  dt_last_buy: Date;

  @ApiProperty({ type: Number })
  last_buy_qty: number;
}
