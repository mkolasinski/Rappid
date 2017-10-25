import { Component, OnInit } from '@angular/core';
import { dia, shapes } from 'jointjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {

      let graph = new dia.Graph;
      let paper = new dia.Paper({
          el: $('#paper'),
          width: 800,
          height: 800,
          model: graph
      });

      let knob = new shapes.chart.Knob({
          position: { x: 400, y: 300 },
          size: { width: 100, height: 100 },
          min: 0, max: 100, value: 80,
          fill: '#2c97de'
      });
      graph.addCell(knob);
  }
}
