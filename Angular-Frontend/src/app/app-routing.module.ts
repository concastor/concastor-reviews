import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPageComponent } from './pages/all-page/all-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'review/:title', component: GamePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'all', component: AllPageComponent },
  { path: 'create', component: CreatePageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
