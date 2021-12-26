import { Component, OnInit } from '@angular/core';

import { BarGraphModel } from '../shared';

@Component({
    selector: 'app-selection-sort',
    templateUrl: './selection-sort.component.html',
    styleUrls: ['./selection-sort.component.scss']
})
export class SelectionSortComponent implements OnInit {
    title = 'Selection Sort';
    maxNumber = 3000;
    minNumber = 100;
    Values: Array<BarGraphModel> = [];
    delay = 500;
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
        return '#' + Math.random().toString(16).substring(2, 8);
    }

    async selectionSort(arrayToSort: Array<BarGraphModel> = []) {
        for (let i = 0; i < arrayToSort.length - 1; i++) {
            let min_index = i;
            for (let j = i + 1; j < arrayToSort.length; j++) {
                if (arrayToSort[j].value < arrayToSort[min_index].value) {
                    min_index = j;
                }
            }
            const temp = arrayToSort[min_index];
            arrayToSort[min_index] = arrayToSort[i];
            arrayToSort[i] = temp;
            if (min_index != i) {
                await this.timer(this.delay);
            }
        }
        window.alert('Selection sort completed');
    }

    timer(milliSeconds: number) {
        return new Promise(res => setTimeout(res, milliSeconds));
    }
}
