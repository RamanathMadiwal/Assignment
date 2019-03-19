import { TestBed } from '@angular/core/testing';

import { FetchLessonService } from './fetch-lesson.service';

describe('FetchLessonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchLessonService = TestBed.get(FetchLessonService);
    expect(service).toBeTruthy();
  });
});
