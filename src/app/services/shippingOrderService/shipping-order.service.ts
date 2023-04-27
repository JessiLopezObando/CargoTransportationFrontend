import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlBackend } from 'src/environments/settingsToStart';

@Injectable({
  providedIn: 'root'
})
export class ShippingOrderService {

  path:string = 'tickets/'

  constructor(private http: HttpClient) { }

  getShippingOrdersForDriverByStatus(driverId:string,status:string){
    return this.http.get(urlBackend+this.path+'driverId/'+driverId+'/status/'+status.toUpperCase());
  }

  acceptedShippingOrder(ticketId:string){
    return this.http.patch(urlBackend+this.path+ticketId+'/accepted',{});
  }

  refuseShippingOrder(ticketId:string){
    return this.http.patch(urlBackend+this.path+ticketId+'/refused',{});
  }

  deliveredShippingOrder(ticketId:string){
    return this.http.patch(urlBackend+this.path+ticketId+'/delivered',{});
  }

  quoteShippingOrder(minutes:number,weight:number){
    return this.http.get(urlBackend+this.path+'cost/minutes/'+minutes+'/weight/'+weight, {responseType: 'text'});
  }

  generateShippingOrder(shippingOrder:any){
    return this.http.post(urlBackend+'tickets',shippingOrder);
  }

}
