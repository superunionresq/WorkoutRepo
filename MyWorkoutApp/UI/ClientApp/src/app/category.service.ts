import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './Category';
@Injectable()
export class CategoryService {
  private _url = 'http://localhost:60852/api/Work';
  constructor(private http: HttpClient) {

  }
  
    getCategories(): Observable < Category[] > {
      return this.http.get<Category[]>(this._url);
  }

  save(cat: Category) {
    return this.http.post(this._url, cat);
  }

  update(cat: Category) {
    return this.http.put(this._url, cat);
  }

  delete(id: number) {
    return this.http.delete(this._url + `/${id}`);
  } 

    


}
