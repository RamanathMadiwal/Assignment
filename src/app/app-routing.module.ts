import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/homecomponent/homecomponent.component';
import { ChannelSessionsComponent} from './components/channelsessions/channelsessions.component'
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";



const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch: 'full'},
  {path:'channel',component:ChannelSessionsComponent},
  {path:'',component:HomeComponent,pathMatch: 'full'},
  { path: 'not-found', component: PageNotFoundComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
