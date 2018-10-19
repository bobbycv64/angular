// https://www.youtube.com/watch?v=fh2GyYQcuxU
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRecord } from '../models/record';

@Injectable()
export class DatabaseService {

  //url: string = 'https://www.cv64.us/cv64/database.json';
  url: string = 'http://localhost:4200/assets/data/database.json';

  constructor(private httpClient: HttpClient) {
    console.log('DatabaseService.constructor');
  }

  // subscribe - handle async processing
  getData() {
    console.log('DatabaseService.getData');
    return this.httpClient.get<IRecord>(this.url);
  }
}
