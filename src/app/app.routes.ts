import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CarDetailComponent} from "./components/car-detail/car-detail.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: HomeComponent,
  },
  {
    path: 'detail/:id',
    component: CarDetailComponent,
  }
];

export const AppRoutes = RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'});
