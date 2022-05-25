import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
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
import { GameIconComponent } from './components/game-icon/game-icon.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { ScoreDisplayComponent } from './shared/score-display/score-display.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

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
    GameIconComponent,
    ScoreDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
