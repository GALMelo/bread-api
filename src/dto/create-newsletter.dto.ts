import { ApiProperty } from '@nestjs/swagger';

export class CreateNewsletterDto {
  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  email: string;
}
