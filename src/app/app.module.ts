import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { ArchiveComponent } from '../Archive/archive.component';
import { NotFoundComponent } from '../common/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArchiveComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    	{ 
    	  path: '', 
    	  component: HomeComponent
    	},
    	{ 
    	  path: 'archive/:year/:month', 
    	  component: ArchiveComponent
    	},
    	{ 
    	  path: '**', 
    	  component: NotFoundComponent
    	},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }