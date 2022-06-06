import { ApiProperty, PartialType } from '@nestjs/swagger';

export class UpdateStockDto {
  @ApiProperty({ type: Number })
  category_stock_id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Number })
  qty?: number;

  @ApiProperty({ type: Date })
  dt_last_buy: Date;

  @ApiProperty({ type: Number })
  last_buy_qty: number;
}
