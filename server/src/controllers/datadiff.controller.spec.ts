import { Test, TestingModule } from '@nestjs/testing';
import { DatadiffController } from './datadiff.controller';

describe('DatadiffController', () => {
  let controller: DatadiffController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatadiffController],
    }).compile();

    controller = module.get<DatadiffController>(DatadiffController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
