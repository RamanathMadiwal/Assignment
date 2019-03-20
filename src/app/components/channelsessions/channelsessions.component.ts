import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {FetchLessonService} from '../../common/services/fetch-lesson.service';
import {Channel} from "../../model/channel.model";
import _ from 'lodash';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { groupBy } from 'lodash';

@Component({
  selector: 'app-channelsessions',
  templateUrl: './channelsessions.component.html',
  styleUrls: ['./channelsessions.component.css']
})
export class ChannelSessionsComponent implements OnInit {
  errors: any[] = [];
  //channel: Channel;
  date: any= new Date();
  channel;

  groupedDates: any;
  sort: any;
  output: any;
  updatedValue;
  constructor(private fetchLessonServices: FetchLessonService) {

  }

  ngOnInit() {
    this.loadLessonDetails();
  }

  transform(collection, property: string) {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if(!collection) {
      return null;
    }

    const groupedCollection = collection.reduce((previous, current)=> {
      if(!previous[current[property]]) {
        previous[current[property]] = [current];
      } else {
        previous[current[property]].push(current);
      }

      return previous;
    }, {});
    console.log("The grouped collection is"+groupedCollection)
    // this will return an array of objects, each object containing a group of objects
    return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
  }


  groupSessionByDate(dataFromService){
    this.sort = _.sortBy(dataFromService, function (o) {
      return o.time;
    });
    this.sort.forEach(element => {
      element.time=element.time.slice(0,10);
    });
    this.output=JSON.stringify(this.sort);
    this.updatedValue=this.transform(this.sort,"time");
    return this.updatedValue;
  }

  loadLessonDetails() {
    this.fetchLessonServices.getLessons().subscribe(
      (data: Channel) => {
        this.channel= this.groupSessionByDate(data);
       console.log("The output is"+this.channel);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errors = errorResponse.error.errors;
      })
  }
}
