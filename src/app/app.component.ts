import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

declare var Stimulsoft;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stimulsoft';

  designer = new Stimulsoft.Designer.StiDesigner(null, 'StiViewer', false);
  report = new Stimulsoft.Report.StiReport();

  constructor(
    private data: DataService
  ) {
    this.designer.onSaveReport = (e) => {
      console.log(e);
      this.saveReportTemplate(e.report.saveToJsonString());
    };
  }

  ngOnInit() {
    this.report.loadDocument(this.data.r);
    this.designer.report = this.report;
    this.designer.renderHtml('designerContent');
  }

  saveReportTemplate(Content) {
    console.log('calling server, etc...', {Content, Id: 'someid', Name: 'reporting project name'});
  }
}
