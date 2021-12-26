import { Component, OnInit } from '@angular/core';

import { activeElementColor, BarGraphModel, resetElementColor, swap, timer } from '../shared';

@Component({
    selector: 'app-quick-sort',
    templateUrl: './quick-sort.component.html',
    styleUrls: ['./quick-sort.component.scss']
})
export class QuickSortComponent implements OnInit {
    title = 'Quick Sort';
    maxNumber = 3000;
    minNumber = 100;
    Values: Array<BarGraphModel> = [];
    delay = 150;
    btnDisabled = false;
    pendingRecursiveCall = 0;

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

    async beginQuickSort(arrayToSort: Array<BarGraphModel>) {
        this.pendingRecursiveCall = 0;
        await this.quickSort(arrayToSort, 0, arrayToSort.length - 1);
        await timer(100);
        window.alert('Quick sort finished');
    }

    async quickSort(arrayToSort: Array<BarGraphModel>, low: number, high: number) {
        if (low < high) {
            const pi = await this.partition(arrayToSort, low, high); // partitioning index
            await this.quickSort(arrayToSort, low, pi - 1);
            await this.quickSort(arrayToSort, pi + 1, high);
        }
    }

    async partition(arrayToSort: Array<BarGraphModel>, low: number, high: number) {
        const pivot = arrayToSort[high];
        const pivotColor = arrayToSort[high].color;
        pivot.legend += '*P';
        activeElementColor(arrayToSort, high);
        await timer(this.delay);
        let i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far
        for (let j = low; j <= high - 1; j++) {
            let element1Color = arrayToSort[j].color;
            let element2Color = arrayToSort[i + 1].color;
            activeElementColor(arrayToSort, j);
            activeElementColor(arrayToSort, i + 1);
            await timer(this.delay);
            if (arrayToSort[j].value < pivot.value) { // If current element is smaller than the pivot
                i += 1; // increment index of smaller element
                swap(arrayToSort, i, j);
                resetElementColor(arrayToSort, i, element1Color);
                resetElementColor(arrayToSort, j, element2Color);
                await timer(this.delay);
            } else {
                resetElementColor(arrayToSort, j, element1Color);
                resetElementColor(arrayToSort, i + 1, element2Color);
            }
        }
        if ((i + 1) != high) {
            swap(arrayToSort, i + 1, high);
            await timer(this.delay);
        }
        pivot.legend = pivot.legend.substring(0, 1);
        pivot.color = pivotColor;
        await timer(this.delay);
        return (i + 1);
    }
}
