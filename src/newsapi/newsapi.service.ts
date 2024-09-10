import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class NewsAPIService {
    private readonly baseUrl: string;
    private readonly apiKey: string;
    constructor(private readonly configService: ConfigService) {
        this.baseUrl = 'http://newsapi.org/v2/top-headlines';
        // this.apiKey = this.configService.get<string>('NEWS_API_KEY');
        this.apiKey = 'a9de027ebb2346a7b788a386d7d16fab'
    }
    async getNews() {
        const url = `${this.baseUrl}?country=us&apikey=${this.apiKey}`;
        console.log(`url: ${url}`)
        
        try {
          const response = await axios.get(url, {
            headers: {'Content-Type': 'application/json',},});
          return response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
          throw new Error(`Error fetching data: ${error.message}`);
        }
      }
}
