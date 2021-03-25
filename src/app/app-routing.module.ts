import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfmakeComponent } from './pdfmake/pdfmake.component';
import { PdflibComponent} from './pdflib/pdflib.component';
import { PdfkitComponent} from './pdfkit/pdfkit.component';

const routes: Routes = [
  { path: 'pdfmake', component: PdfmakeComponent },
  { path: 'pdflib', component: PdflibComponent },
  { path: 'pdfkit', component: PdfkitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
