export class BarGraphModel {
    value: number;
    color: string;
    size: string;
    legend: string;

    constructor(args: any) {
        this.value = args.value;
        this.color = args.color;
        this.size = args.size;
        this.legend = args.legend;
    }
}