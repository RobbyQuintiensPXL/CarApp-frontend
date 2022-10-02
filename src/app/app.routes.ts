import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: HomeComponent,
  }
];

export const AppRoutes = RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'});
