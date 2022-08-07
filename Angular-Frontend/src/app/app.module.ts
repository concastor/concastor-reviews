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
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ScoreCreateComponent } from './components/score-create/score-create.component';
import { CreateComponentComponent } from './components/create-component/create-component.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SelectionIconComponent } from './components/selection-icon/selection-icon.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { SignInPageComponent } from './shared/sign-in-page/sign-in-page.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    ScoreCreateComponent,
    CreateComponentComponent,
    SelectionIconComponent,
    SearchBarComponent,
    SignInPageComponent,
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
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
