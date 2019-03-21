import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchLessonService} from './common/services/fetch-lesson.service';
import { HttpClientModule} from "@angular/common/http";

import { ChannelSessionsComponent } from './components/channelsessions/channelsessions.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './components/home/homecomponent.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelSessionsComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
  ],
  providers: [FetchLessonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
