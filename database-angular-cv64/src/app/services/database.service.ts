import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';

@Injectable()
export class DatabaseService {

  constructor() {
    console.log('DatabaseService.constructor');
  }

  /*
    queryDatabase(queryName: string): Observable<any> {
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DatabaseService.queryDatabase: ' + queryName);

      if (localStorage.getItem(queryName)) {
        return Observable.of(localStorage.getItem(queryName));
      }
      return this.httpClient.get(queryName).map(res => { return res }).catch(this.databaseError);
    }
    */

  addRecord(newRecord) {
    console.log('DatabaseService.newRecord');
    var records = JSON.parse(localStorage.getItem('records'));
    records.push(newRecord);
    localStorage.setItem('records', JSON.stringify(records));
  }

  removeRecord(record) {
    console.log('DatabaseService.removeRecord');
    var records = JSON.parse(localStorage.getItem('records'));
    for (var i = 0; i < records.length; i++) {
      if (records.index == records[i].index) {
        records.splice(i, 1);
      }

      localStorage.setItem('records', JSON.stringify(records));
    }
  }

  loadRecords() {
    console.log('DatabaseService.loadRecords');
    if (localStorage.getItem('records') === null ||
      localStorage.getItem('records') === undefined) {

      console.log('No records found...  Creating');

      // JSON Records
      let records = [
        { index: 0, value: 'aaa' },
        { index: 1, value: 'bbb' },
        { index: 2, value: 'ccc' }
      ]

      // convert object to string - JSON.stringify
      localStorage.setItem('records', JSON.stringify(records));

    } else {
      console.log('DatabaseService.loadRecords - data already exists');
    }
  }

  updateRecords(newRecords) {
    console.log('DatabaseService.updateRecord');
    var records = JSON.parse(localStorage.getItem('records'));
    for (var i = 0; i < records.length; i++) {
      if (records[i].index == newRecords[i].index) {
        console.log('updateRecords: ' + records[i].value + ' updated from ' + newRecords[i].value);
        records[i].value = newRecords[i].value;
      }
    }

    localStorage.setItem('records', JSON.stringify(records));
  }
}
