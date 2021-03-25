import { Component, OnInit } from '@angular/core';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'


@Component({
  selector: 'app-pdflib',
  templateUrl: './pdflib.component.html',
  styleUrls: ['./pdflib.component.scss']
})
export class PdflibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
async createPdf() {
  const pdfDoc = await PDFDocument.create()
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

  const page = pdfDoc.addPage()
  const { width, height } = page.getSize()
  const fontSize = 30
  page.drawText('Creating PDFs in JavaScript is awesome!', {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  })
  
  const pdfBytes = await pdfDoc.save()
  console.log(pdfBytes)
 
}


}
