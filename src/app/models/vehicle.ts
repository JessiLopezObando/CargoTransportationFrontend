export interface Vehicle {
    plate:string;
    brand:string;
    model:string;
    color:string;
    type:string;
    totalCapacity:number;
    currentCapacity?:number;
    isFull?:boolean;
}
