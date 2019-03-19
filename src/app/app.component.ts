import {Component} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {FetchLessonService} from './common/services/fetch-lesson.service';
import {Channel} from "./Model/channel.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  errors: any[] = [];
  channel: Channel;
  date: any= new Date();
  constructor(private fetchLessonServices: FetchLessonService) {

  }

  ngOnInit() {
    this.loadLessonDetails();
  }

  sortByDate(data: Channel):Channel{


    return data


  }
  loadLessonDetails() {
    this.fetchLessonServices.getLessons().subscribe(
      (data: Channel) => {
        this.channel= this.sortByDate(data);

        console.log(data);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errors = errorResponse.error.errors;
      })
  }
}
