import { Injectable } from '@angular/core';
import { List } from "./list.model";
import { Http, Headers, Response } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class ViewListService {

  list: List[] = [];

  constructor(private http: Http) { }
  serverAPI: string = 'http://localhost:3000';
    saveList(title: string, desc: string) {
      const URI = `${this.serverAPI}/lists`;
      const headers = new Headers({'Content-type' : 'application/json'});
      const body = JSON.stringify({title: title, description: desc});
      return this.http.post(URI, body,
        {headers: headers});
    }

    getList() {
      const URI = `${this.serverAPI}/lists`;
      return this.http.get(URI)
        .map(
          (response: Response) => {
            const data = response.json();
            return data;
          }
        );
    }

    onDelete(itemID: string) {
      const URI = `${this.serverAPI}/lists/${itemID}`;
      return this.http.delete(URI);
    }

}
