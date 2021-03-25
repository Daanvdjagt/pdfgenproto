import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdfmake',
  templateUrl: './pdfmake.component.html',
  styleUrls: ['./pdfmake.component.scss']
})
export class PdfmakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  generatePdf(){
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    pdfMake.createPdf(documentDefinition).open();
   }
}
