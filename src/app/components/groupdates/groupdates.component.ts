import {Component, OnInit} from '@angular/core';
import _ from 'lodash';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { groupBy } from 'lodash';

@Component({
  selector: 'app-groupdates',
  templateUrl: './groupdates.component.html',
  styleUrls: ['./groupdates.component.css']
})
export class GroupdatesComponent implements OnInit {
  groupedDates: any;
  sort: any;
  output: any;
  updatedValue;

  constructor() {
  }

  data = [
    {
      "title": "Pellentesque sagittis porttitor tincidunt. Sed.",
      "time": "2016-01-01 21:00:00"
    },
    {
      "title": "Sed mauris dui, ornare ut.",
      "time": "2016-01-01 20:00:00"
    },
    {
      "title": "Donec viverra, magna ut porttitor",
      "time": "2016-01-03 20:00:00"
    },

    {
      "title": "Nulla convallis dolor quis erat.",
      "time": "2016-01-03 22:00:00"
    },
    {
      "title": "In hac habitasse platea dictumst.",
      "time": "2016-01-03 21:00:00"
    },
    {
      "title": "Phasellus a interdum purus, non.",
      "time": "2016-01-04 21:00:00"
    },

    {
      "title": "In quis elit ut ipsum.",
      "time": "2016-01-05 19:00:00"
    },
    {
      "title": "Ut consequat risus id lacus.",
      "time": "2016-01-05 22:00:00"
    }
  ]

  //  groupBy(dataToGroupOn, fieldNameToGroupOn, fieldNameForGroupName, fieldNameForChildren) {
  //   this.groupedDates = _.chain(dataToGroupOn)
  //     .groupBy(fieldNameToGroupOn)
  //     .toPairs()
  //     .map(function (currentItem) {
  //       return _.zipObject([fieldNameForGroupName, fieldNameForChildren], currentItem);
  //     })
  //     .value();
  //   return this.groupedDates;
  // }
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

  ngOnInit() {
    this.sort = _.sortBy(this.data, function (o) {
      return o.time;
    });
    this.sort.forEach(element => {
      element.time=element.time.slice(0,10);
    });
    this.output=JSON.stringify(this.sort);
    this.updatedValue=this.transform(this.sort,"time");
    console.log("The grouped value is"+JSON.stringify(this.updatedValue))
  }


}
