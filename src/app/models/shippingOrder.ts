export interface ShippingOrder {
    id?:string;
    driverID:string;
    origin:string;
    destination:string;
    customerName:string;
    customerEmail:string;
    packageReceiver:string;
    weight:number;
    minutes:number;
    cost?:number;
    status?:string;
    description:string;
}