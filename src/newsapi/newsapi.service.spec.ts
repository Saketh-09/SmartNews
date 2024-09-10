import { Test, TestingModule } from '@nestjs/testing';
import { NewsAPIService } from './newsapi.service';

describe('GdeltService', () => {
  let service: NewsAPIService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsAPIService],
    }).compile();

    service = module.get<NewsAPIService>(NewsAPIService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
