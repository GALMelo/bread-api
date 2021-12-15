import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ type: Number })
  categoryId: number;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: Number })
  price: number;

  @ApiProperty({ type: Number })
  qty: number;
}
