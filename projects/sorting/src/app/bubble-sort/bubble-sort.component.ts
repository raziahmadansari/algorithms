import { Component, OnInit } from '@angular/core';

import { activeElementColor, BarGraphModel, resetElementColor, swap, timer } from '../shared';

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
    delay = 150;
    sorted = false;
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

    async bubbleSort(arrayToSort: Array<BarGraphModel> = []) {
        for (let i = 0; i < arrayToSort.length - 1; i++) {
            this.sorted = true;
            for (let j = 0; j < arrayToSort.length - i - 1; j++) {
                const element1Color = arrayToSort[j].color;
                const element2Color = arrayToSort[j + 1].color;
                activeElementColor(arrayToSort, j);
                activeElementColor(arrayToSort, j + 1);
                await timer(this.delay + 300);
                let elementsSwapped = false;
                if (arrayToSort[j].value > arrayToSort[j + 1].value) {
                    elementsSwapped = true;
                    this.sorted = false;
                    swap(arrayToSort, j, j + 1);
                    await timer(this.delay);
                    resetElementColor(arrayToSort, j, element2Color);
                    resetElementColor(arrayToSort, j + 1, element1Color);
                }
                if (!elementsSwapped) {
                    resetElementColor(arrayToSort, j, element1Color);
                    resetElementColor(arrayToSort, j + 1, element2Color);
                }
            }
            if (this.sorted) break;
        }
        window.alert('Bubble sort completed');
    }
}
