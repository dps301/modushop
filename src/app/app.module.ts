import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { routing } from './app.router';

import { AgmCoreModule } from '@agm/core';
import { ShopDetailComponent } from './pages/shop-detail/shop-detail.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    ShopDetailComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC1ijmv838kXZoObxwy46mcE-XqMPfb9gs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
