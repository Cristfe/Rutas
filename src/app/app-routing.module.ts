import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ReviewsComponent } from './components/Producto/reviews/reviews.component';
import { RelatedComponent } from './components/Producto/related/related.component';
import { ContactoComponent } from './components/Producto/contacto/contacto.component';
import { RandomGuard } from "./random.guard";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'sobremi', component: AboutComponent },
  { path: 'info', component: InfoComponent, canActivate: [RandomGuard] },
  { path: 'empleado/:empleadoId', component: EmpleadoComponent },

  {
    path: 'producto/:productoId', component: ProductoComponent, children: [
      { path: 'reviews', component: ReviewsComponent },
      { path: 'related', component: RelatedComponent },
      { path: 'contacto', component: ContactoComponent },
    ]
  },

  // { path: '**', component: HomeComponent }
  { path: '**', redirectTo: '/info' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
