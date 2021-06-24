import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Owner } from "../owner/Owner.model";
import { Pet } from "../pets/Pet.model";

@Injectable({
    providedIn:'root'
})
export class HttpService{

    OWNER_URL = 'http://localhost:3000/owners';
    PET_URL = 'http://localhost:3000/pets';

    constructor(private httpClient: HttpClient){}

    getAllOwners(): Observable<Owner[]> {
        return this.httpClient.get<Owner[]>(this.OWNER_URL);
    }

    getAllPets(): Observable<Pet[]> {
        return this.httpClient.get<Pet[]>(this.PET_URL);
    }
}