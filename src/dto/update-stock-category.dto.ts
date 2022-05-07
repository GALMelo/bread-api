import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateStockCategoryDto } from './create-stock-category.dto';

export class UpdateStockCategoryDto extends PartialType(
  CreateStockCategoryDto,
) {
  @ApiProperty({ type: String })
  name: string;
}
