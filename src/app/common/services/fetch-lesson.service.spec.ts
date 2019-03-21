import {TestBed,async, inject} from '@angular/core/testing';

import {FetchLessonService} from './fetch-lesson.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('FetchLessonService', () => {
  let service: FetchLessonService;
  let httpMock: HttpTestingController;
  const ROOT_URL = '/api/channel/lessons';
  const dummyData = [
    {
      "title": "Pellentesque sagittis porttitor tincidunt. Sed.",
      "description": "Curabitur eu velit vitae massa varius rhoncus. Proin eu ligula venenatis, consequat libero maximus, varius lorem. Morbi a dignissim nibh. Suspendisse eget ornare nunc, sollicitudin lacinia elit. Sed in volutpat.",
      "instructorName": "Scelerisque Via",
      "instructorPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=D&w=60&h=60",
      "subjectPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=B&w=60&h=60",
      "time": "2016-01-01 21:00:00"
    },
    {
      "title": "Sed mauris dui, ornare ut.",
      "description": "Vivamus pulvinar, nisl fermentum cursus tincidunt, tortor justo dignissim metus, consectetur facilisis nulla tellus ut nisi. Cras in lorem neque. Vivamus sed odio in libero finibus consequat. Maecenas facilisis nisi.",
      "instructorName": "Integer Laciana",
      "instructorPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=E&w=60&h=60",
      "subjectPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=B&w=60&h=60",
      "time": "2016-01-01 20:00:00"
    },
    {
      "title": "Donec viverra, magna ut porttitor",
      "description": "Maecenas finibus ullamcorper aliquam. Integer eros neque, placerat id convallis non, rutrum tempor nisi. In venenatis vulputate feugiat. Vivamus porttitor, odio sit amet volutpat maximus, magna est maximus sapien, et.",
      "instructorName": "Posuere Una",
      "instructorPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=E&w=60&h=60",
      "subjectPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=A&w=60&h=60",
      "time": "2016-01-03 20:00:00"
    },

    {
      "title": "Nulla convallis dolor quis erat.",
      "description": "Sed hendrerit luctus finibus. Sed justo dui, vulputate ac suscipit condimentum, porttitor sed dolor. Ut eu justo at metus dapibus facilisis a quis libero. Integer lectus turpis, pretium a tincidunt.",
      "instructorName": "Erat Libero",
      "instructorPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
      "subjectPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
      "time": "2016-01-03 22:00:00"
    },
    {
      "title": "In hac habitasse platea dictumst.",
      "description": "Suspendisse consequat egestas posuere. Integer diam diam, gravida ac condimentum a, vulputate et quam. Fusce eleifend leo sed diam cursus, nec ultrices orci luctus. Vivamus eget eros aliquam, suscipit sapien.",
      "instructorName": "Ipsum Primis",
      "instructorPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=A&w=60&h=60",
      "subjectPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=D&w=60&h=60",
      "time": "2016-01-03 21:00:00"
    },
    {
      "title": "Phasellus a interdum purus, non.",
      "description": "Pellentesque bibendum, nulla tincidunt consequat rutrum, sem lacus mattis quam, cursus semper lectus nibh id diam. Duis ullamcorper, odio ac blandit pretium, purus est varius ante, eu aliquam elit tortor.",
      "instructorName": "Cras Ac",
      "instructorPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=B&w=60&h=60",
      "subjectPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=A&w=60&h=60",
      "time": "2016-01-04 21:00:00"
    },

    {
      "title": "In quis elit ut ipsum.",
      "description": "Praesent fermentum tortor non arcu imperdiet, egestas vestibulum augue tempus. Nunc sollicitudin tincidunt metus placerat luctus. Praesent at finibus nibh. Donec auctor feugiat hendrerit. Nulla massa augue, mattis quis fermentum.",
      "instructorName": "Aliquam Nisl",
      "instructorPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=D&w=60&h=60",
      "subjectPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
      "time": "2016-01-05 19:00:00"
    },
    {
      "title": "Ut consequat risus id lacus.",
      "description": "Nunc hendrerit blandit elit sed rhoncus. Sed interdum tempus enim vel ornare. Nulla facilisi. Morbi rhoncus turpis in justo sollicitudin, sit amet varius magna fringilla. Fusce porta magna neque, nec.",
      "instructorName": "Vestibulum Ante",
      "instructorPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=B&w=60&h=60",
      "subjectPhotoUrl": "https://placeholdit.imgix.net/~text?txtsize=34&txt=A&w=60&h=60",
      "time": "2016-01-05 22:00:00"
    }
  ]
  beforeEach(
    () => TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        HttpClientTestingModule
      ]
    }));
  beforeEach(() => {
    service = TestBed.get(FetchLessonService);
    httpMock = TestBed.get(HttpTestingController)
  })
  //We also run HttpTestingController#verify to
  // make sure that there are no outstanding requests:
  afterEach(() => {
    httpMock.verify();
  })

  it('Service should be created', () => {
    const service: FetchLessonService = TestBed.get(FetchLessonService);
    expect(service).toBeTruthy();
  });

  it('should retrieve Data from api via GET and match the requirement data', () => {
    service.getLessons().subscribe(channeldata => {
      expect(channeldata).toEqual(dummyData)
    })


    /*Mocking
    HttpTestingController to mock requests and
    the flush method to provide dummy values as
    responses. As the HTTP request methods return an
    Observable, we subscribe to it and create our
    expectations in the callback methods:*/

    const req = httpMock.expectOne(`${ROOT_URL}`)
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });

  it(`should issue a request to api`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
      // 2. inject HttpClient and HttpTestingController into the test
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
        // 3. send a simple request
        http.get(ROOT_URL).subscribe();

        // 4. HttpTestingController supersedes `MockBackend` from the "old" Http package
        // here two, it's significantly less boilerplate code needed to verify an expected request
        backend.expectOne({
          url: ROOT_URL,
          method: 'GET'
        });
      })
    )
  );
});
