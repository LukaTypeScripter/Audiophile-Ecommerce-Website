import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    loadChildren: () => import('./shared/module/product-routing.module').then(m => m.ProductRoutingModule)
  },
];
