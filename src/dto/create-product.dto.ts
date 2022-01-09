import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ type: Number })
  category_id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: Number })
  price: number;

  @ApiProperty({ type: String })
  image_url: string;

  @ApiProperty({ type: Number })
  qty?: number;

  @ApiProperty({ type: Number })
  sold?: number;
}
