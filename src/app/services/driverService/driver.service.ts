import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { urlBackend } from 'src/environments/settingsToStart';


@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }

  registerDriver(driver:any):Observable<any>{
    return this.http.post(urlBackend+'drivers',driver);
  }

  getDrivers():Observable<any>{
    return this.http.get(urlBackend+'drivers');
  }

  getDriverById(id:string):Observable<any>{
    return this.http.get(urlBackend+'drivers/'+id);
  }

  updateDriver(driver:any):Observable<any>{
    return this.http.put(urlBackend+'drivers/'+driver.id,driver);
  }

  getDriverByEmail(email:string):Observable<any>{
    return this.http.get(urlBackend+'drivers/email/'+email).pipe(
      catchError(error => {
        return throwError(error);
        
      })
    );
  }

  //special methods for vehicle

  getAvailableDriversWihtCapacity(weight:number):Observable<any>{
    return this.http.get(urlBackend+'drivers/request/weight/'+weight);
  }

  acceptedShippingOrder(driverId:string,weight:number){
    return this.http.patch(urlBackend+'drivers/id/'+driverId+'/weight/'+weight+'/accepted',{});
  }

  deliveredShippingOrder(driverId:string,weight:number){
    return this.http.patch(urlBackend+'drivers/id/'+driverId+'/weight/'+weight+'/delivered',{});
  }



  
}
