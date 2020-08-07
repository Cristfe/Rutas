import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ReviewsComponent } from './components/Producto/reviews/reviews.component';
import { RelatedComponent } from './components/Producto/related/related.component';
import { ContactoComponent } from './components/Producto/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    InfoComponent,
    EmpleadoComponent,
    ProductoComponent,
    ReviewsComponent,
    RelatedComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
