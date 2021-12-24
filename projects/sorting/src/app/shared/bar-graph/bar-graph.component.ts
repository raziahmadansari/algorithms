import { Component, Input, OnInit } from '@angular/core';

import { BarGraphModel } from '../models';

@Component({
    selector: 'app-bar-graph',
    templateUrl: './bar-graph.component.html',
    styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {
    @Input() List: Array<BarGraphModel> = [];

    Total = 0;
    MaxHeight = 512; // default
    MaxValue = 0;

    constructor() { }

    ngOnInit(): void {
        this.MaxHeight = window.innerHeight - 200;
        this.initialize();
    }

    initialize() {
        this.List.forEach(element => {
            // this.Total += element.value;
            if (element.value > this.MaxValue) this.MaxValue = element.value;
        });

        this.List.forEach(element => {
            // element.size = Math.round((element.value * this.MaxHeight) / this.Total) + '%';
            element.size = Math.round((element.value / this.MaxValue) * 90) + '%';
        });
    }
}
