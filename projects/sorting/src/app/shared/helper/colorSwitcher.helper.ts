import { BarGraphModel } from "../models";

export const activeElementColor = (array: Array<BarGraphModel>, index: number, color: string = 'red') => {
    array[index].color = color;
};

export const resetElementColor = (array: Array<BarGraphModel>, index: number, color: string) => {
    array[index].color = color;
};
