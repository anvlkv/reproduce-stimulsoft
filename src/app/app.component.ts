import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.designer.onSaveReport = (e) => {
      console.log(e);
      this.saveReportTemplate(e.report.saveToJsonString());
    };
  }

  ngOnInit() {
    this.designer.renderHtml('designerContent');
  }

  saveReportTemplate(Content) {
    console.log('calling server, etc...', {Content, Id: 'someid', Name: 'reporting project name'});
  }
}
