import { Component, OnInit } from '@angular/core';

import { activeElementColor, BarGraphModel, resetElementColor, swap, timer } from '../shared';

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
    delay = 100;
    btnDisabled = false;

    constructor() { }

    ngOnInit() {
        this.initializeValue();
    }

    async initializeValue() {
        this.Values = [];
        await timer(100);
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
            let element1Color = arrayToSort[min_index].color;
            let ithElementColor = element1Color;
            activeElementColor(arrayToSort, min_index);
            for (let j = i + 1; j < arrayToSort.length; j++) {
                const element2Color = arrayToSort[j].color;
                activeElementColor(arrayToSort, j);
                if (arrayToSort[j].value < arrayToSort[min_index].value) {
                    if (min_index != i) resetElementColor(arrayToSort, min_index, element1Color);
                    min_index = j;
                    element1Color = element2Color;
                }
                await timer(this.delay);
                if (min_index != j) resetElementColor(arrayToSort, j, element2Color);
            }
            if (min_index != i) {
                swap(arrayToSort, min_index, i);
                resetElementColor(arrayToSort, min_index, ithElementColor);
                resetElementColor(arrayToSort, i, element1Color);
                await timer(this.delay);
            } else resetElementColor(arrayToSort, i, ithElementColor);
        }
        await timer(100);
        window.alert('Selection sort completed');
    }
}
