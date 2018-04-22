import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
@Injectable()
export class DataService {
  data: any =  [];
  public apiUrl = 'https://kj-api-test.aws.studio404.net/api/JobAds?access_token=jure';
  constructor(public http: Http) {
    this.getData();
    }
    getData() {
      return this.http.get(this.apiUrl)
      .map((res: Response) => res.json());
}
}
