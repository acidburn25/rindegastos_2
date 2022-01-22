import { Test, TestingModule } from '@nestjs/testing';
import { DatediffService } from './datediff.service';

describe('DatediffService', () => {
  let service: DatediffService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatediffService],
    }).compile();

    service = module.get<DatediffService>(DatediffService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
