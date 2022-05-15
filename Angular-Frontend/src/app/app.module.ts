import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { AllPageComponent } from './pages/all-page/all-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { GameGridComponent } from './components/game-grid/game-grid.component';
import { RecentGameComponent } from './components/recent-game/recent-game.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    GamePageComponent,
    PageNotFoundComponent,
    CreatePageComponent,
    AllPageComponent,
    GameGridComponent,
    RecentGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
