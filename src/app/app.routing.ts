import { RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes = [
  {
    path: 'movies',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'movies/:id',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'movies',
  },
];

//Proceso de Ruteo
export const AppRouting = RouterModule.forRoot(routes);
