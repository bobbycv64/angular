import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { MyNewInterface } from './my-new-interface';

@Injectable()

export class ApiService {

  private url = 'https://www.cv64.us/cv64/ddb/database/public/getAllRecords.php';

  constructor(private http: Http) {
  }

  getPosts(): Observable<MyNewInterface[]> {
    return this.http.get(this.url).map((response: Response) => {
      return <MyNewInterface[]>response.json();
    })
    .catch(this.handleError);
  }

  private handelError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
