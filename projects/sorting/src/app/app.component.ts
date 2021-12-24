import { Component, OnInit } from '@angular/core';

import { BarGraphModel } from './shared';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'sorting';
    maxNumber = 3000;
    minNumber = 100;
    Values: Array<BarGraphModel> = [];
    delay = 200;

    constructor() { }

    ngOnInit() {
        this.initializeValue();
        this.sortInIncreasingOrder(this.Values);
    }

    initializeValue() {
        this.Values = [];
        const A = 'A'.charCodeAt(0);
        for (let i = 0; i < 26; i++) {
            this.Values.push({ value: this.getRandomNumber(), color: this.getRandomColor(), size: '', legend: String.fromCharCode(A + i) });
        }
    }

    getRandomNumber() {
        return Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1) + this.minNumber);
    }

    getRandomColor() {
        return '#' + Math.random().toString(16).substr(2, 6);
    }

    async sortInIncreasingOrder(arrayToSort: Array<BarGraphModel> = []) {
        for (let i = 0; i < arrayToSort.length - 1; i++) {
            for (let j = i + 1; j < arrayToSort.length; j++) {
                console.log(`values: (i- ${i}, j- ${j})`);
                if (arrayToSort[j].value < arrayToSort[i].value) {
                    const temp = arrayToSort[i];
                    arrayToSort[i] = arrayToSort[j];
                    arrayToSort[j] = temp;
                    await this.timer(this.delay);
                }
            }
        }
    }

    timer(milliSeconds: number) {
        return new Promise(res => setTimeout(res, milliSeconds));
    }
}
