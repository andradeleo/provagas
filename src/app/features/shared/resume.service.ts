import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  constructor() { }


  public build(data: any) {
    const page = this.newPDF();
    const pageWidth = page.internal.pageSize.getWidth();

    page.setFontSize(14);

    // title

    const resumeTitle = `${data.name}, ${data.job_title}`;
    const width = page.getTextWidth(resumeTitle);
    page.text(resumeTitle, (pageWidth - width) / 2, 20);

    // subtitle
    page.setFontSize(10);
    const infos = `Brasil, (49) 99999-9999, ${data.email} `;
    const widthInfos = page.getTextWidth(infos);
    page.text(infos, (pageWidth - widthInfos) / 2, 27);

    // Linha

    page.setLineWidth(0.2);
    const lineSpacing = 35;
    page.line(20, lineSpacing, pageWidth - 20, lineSpacing,);

    // Download

    page.save('curriculo.pdf');
  }

  public newPDF() {
    return new jsPDF();
  }
}
