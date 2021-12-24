import { Component, Input, OnInit } from '@angular/core';

import { BarGraphModel } from '../models';

@Component({
    selector: 'app-bar-graph',
    templateUrl: './bar-graph.component.html',
    styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {
    @Input() List: Array<BarGraphModel> = [];

    public Total = 0;
    public MaxHeight = 160;

    constructor() { }

    ngOnInit(): void {
        this.initialize();
    }

    initialize() {
        this.List.forEach(element => {
            this.Total += element.value;
        });

        this.List.forEach(element => {
            element.size = Math.round((element.value * this.MaxHeight) / this.Total) + '%';
        });
    }
}
