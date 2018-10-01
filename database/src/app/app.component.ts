import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { MyNewInterface } from './my-new-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'database';
  postArray: MyNewInterface[];

  constructor(private apiService: ApiService) {

  }

  getPosts(): void {
    this.apiService.getPosts()
    .subscribe(
      resultArray => this.postArray = result,
      error => console.log('Error: ' + error)
    )
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
