import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchLessonService} from './common/services/fetch-lesson.service';
import {HttpClientModule} from "@angular/common/http";
import { GroupByPipe } from './common/pipe/group-by.pipe';
import { ChannelSessionsComponent } from './components/channelsessions/channelsessions.component';
import { GroupdatesComponent } from './components/groupdates/groupdates.component';


@NgModule({
  declarations: [
    AppComponent,
    GroupByPipe,
    ChannelSessionsComponent,
    GroupdatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FetchLessonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
