import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { MenuComponent } from './menu/menu.component';
import { PartidoComponent } from './partido/partido.component';
import { TablaPlantelComponent } from './partido/tablaPlantel/tablaPlantel.component';

@NgModule({
  declarations: [
    AppComponent,MenuComponent, PartidoComponent,TablaPlantelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
