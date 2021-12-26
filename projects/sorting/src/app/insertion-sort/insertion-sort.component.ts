import { Component, OnInit } from '@angular/core';

import { BarGraphModel } from '../shared';

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

    async insertionSort(arrayToSort: Array<BarGraphModel> = []) {
        for (let i = 1; i < arrayToSort.length; i++) {
            const key = arrayToSort[i];
            let j = i - 1;
            while (j >= 0 && arrayToSort[j].value > key.value) {
                arrayToSort[j + 1] = arrayToSort[j];
                j -= 1;
            }
            arrayToSort[j + 1] = key;
            await this.timer(this.delay);
        }
        window.alert('Insertion sort completed');
    }

    timer(milliSeconds: number) {
        return new Promise(res => setTimeout(res, milliSeconds));
    }
}
