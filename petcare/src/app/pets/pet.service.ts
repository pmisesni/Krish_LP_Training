import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/http.service';
import { Pet } from './Pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpService: HttpService, private httpClient: HttpClient) { }

  getAllPets(): Observable<Pet[]>{
    return this.httpService.getAllPets();
  }

  create(data: Pet): Observable<Pet> {
    return this.httpClient.post<Pet>(this.httpService.PET_URL, data);
    }

    read(id: number): Observable<Pet> {
      return this.httpClient.get<Pet>(this.httpService.PET_URL+ '/'+id);
    }
   
    update(id:number, data: Pet): Observable<Pet> {
      return this.httpClient.put<Pet>(this.httpService.PET_URL+ '/'+id, data);
    }
  
    delete(id:number): Observable<Pet> {
      return this.httpClient.delete<Pet>(this.httpService.PET_URL+ '/'+id);
    }
}
