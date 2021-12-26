import { Component, OnInit } from '@angular/core';

import { BarGraphModel } from '../shared';

@Component({
    selector: 'app-bubble-sort',
    templateUrl: './bubble-sort.component.html',
    styleUrls: ['./bubble-sort.component.scss']
})
export class BubbleSortComponent implements OnInit {
    title = 'Bubble Sort';
    maxNumber = 3000;
    minNumber = 100;
    Values: Array<BarGraphModel> = [];
    delay = 200;
    sorted = false;
    btnDisabled = false;

    constructor() { }

    ngOnInit() {
        this.initializeValue();
    }

    async initializeValue() {
        this.Values = [];
        await this.timer(100);
        const A = 'A'.charCodeAt(0);
        for (let i = 0; i < 26; i++) {
            this.Values.push({ value: this.getRandomNumber(), color: this.getRandomColor(), size: '', legend: String.fromCharCode(A + i) });
        }
        this.btnDisabled = false;
    }

    getRandomNumber() {
        return Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1) + this.minNumber);
    }

    getRandomColor() {
        return '#' + Math.random().toString(16).substr(2, 6);
    }

    async sortInIncreasingOrder(arrayToSort: Array<BarGraphModel> = []) {
        for (let i = 0; i < arrayToSort.length - 1; i++) {
            this.sorted = true;
            for (let j = 0; j < arrayToSort.length - i - 1; j++) {
                if (arrayToSort[j].value > arrayToSort[j + 1].value) {
                    this.sorted = false;
                    const temp = arrayToSort[j];
                    arrayToSort[j] = arrayToSort[j + 1];
                    arrayToSort[j + 1] = temp;
                    await this.timer(this.delay);
                }
            }
            if (this.sorted) break;
        }
    }

    timer(milliSeconds: number) {
        return new Promise(res => setTimeout(res, milliSeconds));
    }
}
