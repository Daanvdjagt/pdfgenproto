import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfmakeComponent } from './pdfmake/pdfmake.component';
import { PdflibComponent } from './pdflib/pdflib.component';
import { PdfkitComponent } from './pdfkit/pdfkit.component';



@NgModule({
  declarations: [
    AppComponent,
    PdfmakeComponent,
    PdflibComponent,
    PdfkitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
