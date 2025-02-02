import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtisanComponent } from './artisan/artisan.component';
import { ArtisanDetailsComponent } from './artisan-details/artisan-details.component';
import { PageFoundComponent } from './page-found/page-found.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'category/:category', component: ArtisanComponent },
    { path: 'artisan-details/:name', component: ArtisanDetailsComponent },
    {path:'page-found',component:PageFoundComponent,title: "Erreur 404 | Touve ton artisan"}
];
