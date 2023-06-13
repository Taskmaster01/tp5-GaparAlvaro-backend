import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspectadorComponent } from './component/espectador/espectador.component';
import { TocketComponent } from './component/tocket/tocket.component';
import { HeaderComponent } from './component/header/header.component';
import { TicformComponent } from './component/ticform/ticform.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductoformComponent } from './component/productoform/productoform.component';
import { ProductoComponent } from './component/producto/producto.component';
import { DivisacComponent } from './component/divisac/divisac.component';
import { DivisalistComponent } from './component/divisalist/divisalist.component';

@NgModule({
  declarations: [
    AppComponent,
    EspectadorComponent,
    TocketComponent,
    HeaderComponent,
    TicformComponent,
    ProductoformComponent,
    ProductoComponent,
    DivisacComponent,
    DivisalistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,///añadido 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
