import { ApiProperty } from '@nestjs/swagger';

export class CreateStockCategoryDto {
  @ApiProperty({ type: String })
  name: string;
}
