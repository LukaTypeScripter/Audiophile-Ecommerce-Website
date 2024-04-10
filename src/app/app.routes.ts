import { Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {HomeComponent} from "./components/home/home.component";
import {ProductComponent} from "./components/product/product.component";

export const routes: Routes = [

  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'product',
    component:ProductComponent
  },
];
