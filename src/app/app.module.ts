import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchLessonService} from './common/services/fetch-lesson.service';
import {HttpClientModule} from "@angular/common/http";
import { GroupByPipePipe } from './common/pipe/group-by-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GroupByPipePipe
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
