import { BarGraphModel } from "../models";

export const swap = (array: Array<BarGraphModel>, index1: number, index2: number) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

export const timer = (milliSeconds: number) => {
    return new Promise(res => setTimeout(res, milliSeconds));
};
