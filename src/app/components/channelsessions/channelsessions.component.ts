import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {FetchLessonService} from '../../common/services/fetch-lesson.service';
import {Channel} from "../../model/channel.model";
import _ from 'lodash';

@Component({
  selector: 'app-channelsessions',
  templateUrl: './channelsessions.component.html',
  styleUrls: ['./channelsessions.component.css'],

})
export class ChannelSessionsComponent implements OnInit {
  errors: any[] = [];
  channel;
  sortByDateTime: any;
  updatedValue:any;
  constructor(private fetchLessonServices: FetchLessonService) {

  }

  ngOnInit() {
    this.loadLessonDetails();
  }

  transformToDateAsKeyObj(collection:Array<object>, property: string):object {
    // Prevents the application from breaking
    // if the array of objects doesn't exist yet

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
    // This will return an array of objects,
    // each object containing a group of objects
    return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
  }


  groupSessionByDate(dataFromService:Channel){
    //Sorting collection based on time using lodash
    this.sortByDateTime = _.sortBy(dataFromService, function (o) {
      return o.time;
    });
    //Slicing Timestamp as Collection needs date as unique keys
    this.sortByDateTime.forEach(element => {
      element.time=element.time.slice(0,10);
    });
    //Create Object with key as dates so could iterate the collection in template
    this.updatedValue=this.transformToDateAsKeyObj(this.sortByDateTime,"time");
    return this.updatedValue;
  }

  loadLessonDetails() {
    this.fetchLessonServices.getLessons().subscribe(
      (data: Channel) => {
        this.channel= this.groupSessionByDate(data);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errors = errorResponse.error.errors;
      })
  }
}
