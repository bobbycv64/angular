import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'database-angular-cv64';

  // JSON Records
  records = [
    { index: 0, value: 'zzz' },
    { index: 1, value: 'yyy' },
    { index: 2, value: 'xxx' }
  ]

  record = { index: 3, value: 'rrr' };

  constructor(private databaseService: DatabaseService) {
    console.log('AppComponent.constructor');
    databaseService.loadRecords();
    databaseService.updateRecords(this.records);
    databaseService.addRecord(this.record);
  }

  ngOnInit() {
    console.log('AppComponent.ngOnInit');
    //this.databaseService.getRecords().subscribe(data => this.record = data);

    //this.databaseService.loadRecords();
    //console.log('ContentComponent.ngOnInit' + this.record);
  }
}
