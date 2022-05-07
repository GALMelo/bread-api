import { Test, TestingModule } from '@nestjs/testing';
import { StockCategoryService } from './stock-category.service';

describe('StockCategoryService', () => {
  let service: StockCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockCategoryService],
    }).compile();

    service = module.get<StockCategoryService>(StockCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
