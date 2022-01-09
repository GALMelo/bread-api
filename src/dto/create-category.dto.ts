import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
  @ApiProperty({ type: String })
  name: string;
}
