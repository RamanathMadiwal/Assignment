import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {FetchLessonService} from '../../common/services/fetch-lesson.service';
import {Channel} from "../../Model/channel.model";

@Component({
  selector: 'app-channelsessions',
  templateUrl: './channelsessions.component.html',
  styleUrls: ['./channelsessions.component.css']
})
export class ChannelSessionsComponent implements OnInit {

  title = 'assignment';
  errors: any[] = [];
  channel: Channel;
  date: any= new Date();
  constructor(private fetchLessonServices: FetchLessonService) {

  }

  ngOnInit() {
    this.loadLessonDetails();
  }


  loadLessonDetails() {
    this.fetchLessonServices.getLessons().subscribe(
      (data: Channel) => {
        this.channel= data;

        console.log(data);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errors = errorResponse.error.errors;
      })
  }
}
