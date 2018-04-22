import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AdsComponent } from './ads/ads.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { DataService } from './services/data--.service';


@NgModule({
  declarations: [
    AppComponent,
    AdsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    OrderModule


  ],
  providers: [AppComponent, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
