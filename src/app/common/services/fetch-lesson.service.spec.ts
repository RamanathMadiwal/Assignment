import { TestBed } from '@angular/core/testing';

import { FetchLessonService } from './fetch-lesson.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('FetchLessonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule,HttpClientModule]
  }));

  it('should be created', () => {
    const service: FetchLessonService = TestBed.get(FetchLessonService);
    expect(service).toBeTruthy();
  });
});
