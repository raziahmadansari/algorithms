import { Component, OnInit } from '@angular/core';

import { activeElementColor, BarGraphModel, resetElementColor, timer } from '../shared';

@Component({
    selector: 'app-insertion-sort',
    templateUrl: './insertion-sort.component.html',
    styleUrls: ['./insertion-sort.component.scss']
})
export class InsertionSortComponent implements OnInit {
    title = 'Insertion Sort';
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

    async insertionSort(arrayToSort: Array<BarGraphModel> = []) {
        for (let i = 1; i < arrayToSort.length; i++) {
            const key = arrayToSort[i];
            let j = i - 1;
            while (j >= 0 && arrayToSort[j].value > key.value) {
                let element1Color = arrayToSort[j].color;
                activeElementColor(arrayToSort, j);
                await timer(this.delay);
                arrayToSort[j + 1] = arrayToSort[j];
                await timer(this.delay);
                resetElementColor(arrayToSort, j + 1, element1Color);
                j -= 1;
            }
            
            if (arrayToSort[j + 1].value != key.value) {
                resetElementColor(arrayToSort, i, key.color);
                arrayToSort[j + 1] = key;
                await timer(this.delay);
            }
        }
        await timer(100);
        window.alert('Insertion sort completed');
    }
}
