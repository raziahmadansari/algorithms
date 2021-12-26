import { Component, OnInit } from '@angular/core';

import { BarGraphModel } from '../shared';

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
    delay = 500;
    btnDisabled = false;
    pendingRecursiveCall = 0;

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

    async beginQuickSort(arrayToSort: Array<BarGraphModel>) {
        this.pendingRecursiveCall = 0;
        await this.quickSort(arrayToSort, 0, arrayToSort.length - 1);
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
        pivot.legend += '*P';
        let i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far
        for (let j = low; j <= high - 1; j++) {
            if (arrayToSort[j].value < pivot.value) { // If current element is smaller than the pivot
                i += 1; // increment index of smaller element
                if (i != j) await this.swap(arrayToSort, i, j);
            }
        }
        if ((i + 1) != high) await this.swap(arrayToSort, i + 1, high);
        pivot.legend = pivot.legend.substring(0, 1);
        return (i + 1);
    }

    async swap(array: Array<BarGraphModel>, index1: number, index2: number) {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        await this.timer(this.delay);
    }

    timer(milliSeconds: number) {
        return new Promise(res => setTimeout(res, milliSeconds));
    }
}
