import { Vehicle } from "./vehicle";

export interface Driver {
    id?:string;
    username?: string;
    name: string;
    lastName: string;
    dni: string;
    email: string;
    phone: string;
    age: number;
    vehicle:Vehicle
}
