import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { routing } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
