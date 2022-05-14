import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPageComponent } from './components/all-page/all-page.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'Review/:title', component: GamePageComponent },
  { path: '/home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: '/all', component: AllPageComponent },
  { path: '/create', component: CreatePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
