import { Component } from '@angular/core';
import { IRecord } from './models/record';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'database2-angular-cv64';
  records: IRecord;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.databaseService.getData().subscribe(data => {
      this.records = data;
    });
  }
}
