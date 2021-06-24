import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/http.service';
import { Owner } from './Owner.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private httpService: HttpService, private httpClient: HttpClient) { }

  getAllOwners(): Observable<Owner[]>{
    return this.httpService.getAllOwners();
  }

  read(id: number): Observable<Owner> {
    return this.httpClient.get<Owner>(this.httpService.OWNER_URL+'/'+id);
  }

  create(data: Owner): Observable<Owner> {
    return this.httpClient.post<Owner>(this.httpService.OWNER_URL, data);
  }


  update(id:number, data: Owner): Observable<Owner> {
    return this.httpClient.put<Owner>(this.httpService.OWNER_URL+'/'+id, data);
  }

  delete(id:number): Observable<any> {
    return this.httpClient.delete<Owner>(this.httpService.OWNER_URL+'/'+id);
  }

  // searchByName(name:string): Observable<any> {
  //   return this.httpClient.get(`${this.httpService.OWNER_URL}?name=${name}`);
  // }
}
