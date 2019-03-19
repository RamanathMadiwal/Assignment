import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchLessonService {
  private _url= 'assets/channel.json';
  constructor(private http: HttpClient) { }

  public getLessons(): Observable<any> {
    /* Data fetching vai local file */
    return this.http.get(this._url);
    /* User needs to fetch from data From Server i.e database */
    //return this.http.get('/api/channel');
  }
}
