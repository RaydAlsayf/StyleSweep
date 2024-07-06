import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from './shared/services/language/language.guard';
import { LanguageResolver } from './shared/services/language/language.resolver';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ar/home',
    pathMatch: 'full'
  },
  {
    path: ':lang',
    canActivate: [LanguageGuard],
    resolve: {lang: LanguageResolver},
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      // Add more routes here
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**', redirectTo: 'ar/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
