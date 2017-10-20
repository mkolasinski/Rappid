import {Component, OnInit} from '@angular/core';
import * as joint from 'jointjs';
import * as $ from 'jquery';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    ngOnInit() {

        let graph = new joint.dia.Graph;
        let paper = new joint.dia.Paper({
            el: $('#paper'),
            width: 800,
            height: 500,
            gridSize: 1,
            model: graph
        });

        let mainCircle = new joint.shapes.basic.Circle({
            position: {x: 50, y: 195},
            size: {width: 100, height: 100},
            attrs: {
                circle: {
                    fill: '#fcaa37',
                    stroke: 'black',
                    'stroke-width': 2,
                    'cursor': 'pointer',
                },
                text: {
                    text: 'Product Owner',
                    fill: 'white',
                    'font-size': 14,
                    'font-family': 'Indie Flower',
                    'font-weight': 'bold',
                    'text-align': 'center'
                }

            }
        });
        graph.addCell(mainCircle);

        let develop = new joint.shapes.basic.Circle({
            position: {x: 250, y: 70},
            size: {width: 80, height: 80},
            attrs: {
                circle: {
                    fill: '#45b4b0',
                    stroke: 'black',
                    'stroke-width': 2,
                    'cursor': 'pointer'
                },
                text: {
                    text: 'Developer 1',
                    fill: 'white',
                    'font-size': 12,
                    'font-family': 'Indie Flower',
                    'font-weight': 'bold',
                    'text-align': 'center'
                }
            }
        });
        graph.addCell(develop);

        let developOther = develop.clone();
        (developOther as any).translate(0, 100).attr({
            circle: {
                fill: '#4682B4'
            },
            text: {
                text: 'Developer 2'
            }
        });
        graph.addCell(developOther);

        let developOther2 = developOther.clone();
        (developOther2 as any).translate(0, 100).attr({
            circle: {
                fill: '#3a2e91'
            },
            text: {
                text: 'Developer 3'
            }
        });
        graph.addCell(developOther2);

        let developOther3 = developOther2.clone();
        (developOther3 as any).translate(0, 100).attr({
            circle: {
                fill: '#1e1042'
            },
            text: {
                text: 'Developer 4'
            }
        });
        graph.addCell(developOther3);

        let line = new joint.shapes.basic.Rect({
            size: { width: 1.5, height: 400 },
            position: { x: 400, y: 60 },
            attrs: {
                rect: {
                    fill: 'black',
                    stroke: 'white',
                    'stroke-width': 3
                }
            }
        });
        graph.addCell(line);

        let taskNo1 = new joint.shapes.basic.Rect({
            size: { width: 110, height: 20},
            position: { x: 480, y: 80},
            attrs: {
                rect: {
                    fill: '#FCADAD',
                    stroke: '#000000',
                    'stroke-width': 2,
                    rx: 10,
                    ry: 10
                },
                text: {
                    text: 'Initialize new project',
                    'font-size': 12,
                    'font-family':'Indie Flower',
                    'font-weight':'bold',
                    'text-align':'center'
                }
            }
        });
        graph.addCell(taskNo1);

        let taskNo2 = taskNo1.clone();
        (taskNo2 as any).translate(0, 40).attr({
            text: {
                text: 'Create user profile'
            }
        });
        graph.addCell(taskNo2);

        let taskNo3 = taskNo2.clone();
        (taskNo3 as any).translate(0, 40).attr({
            text: {
                text: 'Create log in window'
            }
        });
        graph.addCell(taskNo3);

        let taskNo4 = taskNo3.clone();
        (taskNo4 as any).translate(0, 40).attr({
            size: { width: 110, height: 40 },
            text: {
                text: 'Adding avatar',
                'overflow':'hidden'
            },
        });
        graph.addCell(taskNo4);
    }
}
