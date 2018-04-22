import { Component } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { OrderPipe } from 'ngx-order-pipe';
import { DataService } from './services/data--.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  order = 'payMax';
  reverse = false;
  title = 'app';
  public apiUrl = 'https://kj-api-test.aws.studio404.net/api/JobAds?access_token=jure';
  data: any =  [];
  sortedCollection: any[];

  constructor(private dataService: DataService , orderPipe: OrderPipe) {
    this.getAds();
    this.sortedCollection = orderPipe.transform(this.data, 'payMax');
  }
  getAds() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
}
}
