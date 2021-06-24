import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../shared/http.service';
import {Pet} from './Pet.model'

@Component({
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit,OnDestroy {
  title: string = "List of Pets";
  petList!: Pet[];
  filteredPetList!: Pet[];
  _petFilter: string ="";
  subscription!: Subscription;

  set petFilter(str:string){
    this._petFilter=str;
    this.filterPets();
  }

  get petFilter():string{
    return this._petFilter;
  }

  constructor(
    private httpService: HttpService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.subscription = this.httpService.getAllPets().subscribe({
      next: data => {
        this.filteredPetList = data;
        this.petList = this.filteredPetList;
      }
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  filterPets(){
    this.filteredPetList = this.petList.filter(o=>o.petType.includes(this._petFilter));
  }

  getUpdatePet(id: number){
    this.router.navigate(['/pet/pet-edit',id]);
  }

  getDeletePet(id: number){
    this.router.navigate(['/pet/pet-delete',id]);
  }

}
