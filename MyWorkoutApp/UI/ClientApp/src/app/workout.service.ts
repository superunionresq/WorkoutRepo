import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workout } from './Workout';

@Injectable()
export class WorkoutService {
  private _url = 'http://localhost:60852/api/Workout';
  constructor(private http: HttpClient) {

  }

  save(work: Workout) {
    return this.http.post(this._url, work);
  } 
}
