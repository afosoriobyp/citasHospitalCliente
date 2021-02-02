import { Component, Input } from '@angular/core';

import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  @Input() title:string = "Sin Titulo";

  @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [50, 450, 100],

  ];

}
