## Parent component : 
Below using the prime ng grid, but you can use flex grid to support the same.  

<div class="ui-g">
  <at-statistic label="My Hours" value="132" icon="fa fa-clock-o" colour="#00ACAC" class="ui-g-12 ui-md-6 ui-lg-3"></at-statistic>
  <at-statistic label="Stories" value="35" icon="fa fa-users" colour="#2F8EE5" class="ui-g-12 ui-md-6 ui-lg-3"></at-statistic>
  <at-statistic label="Remaining" value="23" icon="fa fa-hourglass-half" colour="#6C76AF" class="ui-g-12 ui-md-6 ui-lg-3"></at-statistic>
  <at-statistic label="Sprints" value="4" icon="fa fa-area-chart" colour="#EFA64C" class="ui-g-12 ui-md-6 ui-lg-3"></at-statistic>
</div>

## Orginal component:
--------------------

import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'at-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  @Input() icon : string;
  @Input() label : string;
  @Input() value: string;
  @Input() colour: string;

  constructor() { }

  ngOnInit() {
  }
  
  ## corresponding html file
  --------------------------
  <div class="statistic ui-g" [style.background-color]="colour">

  <div class="icon ui-g-5">
    <i class="fa {{ icon }}" *ngIf="icon"></i>
  </div>

  <div class="data ui-g-7">

    <div class="value">
      {{ value }}
    </div>

    <div class="label" *ngIf="label">
      {{ label }}
    </div>

  </div>
  
  ## corresponding css file:
  --------------------------
  .statistic {
  margin: 1em;
  min-width: 200px;
  color: white;
  text-align: center;
  font-family: "Roboto";
}

.icon {
  font-size: 70px;
  margin: 0px;
  padding: 5px;
  background:rgba(0,0,0,.1);
}

.data {
  padding: 1em;
  vertical-align: middle;
}

.value {
font-size: 40px;
}

.label {
  text-transform: uppercase;
}


