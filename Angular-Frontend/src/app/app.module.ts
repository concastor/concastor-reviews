import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { AllPageComponent } from './components/all-page/all-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    GamePageComponent,
    PageNotFoundComponent,
    CreatePageComponent,
    AllPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
