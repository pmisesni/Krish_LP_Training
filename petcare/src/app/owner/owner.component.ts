import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../shared/http.service';
import { Owner } from './Owner.model';
import { OwnerService } from './owner.service';


@Component({
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit,OnDestroy {
  title: string = "list of Pet owners";
  ownersList!: Owner[];
  filteredOwnersList!: Owner[];
  _ownerFilter!: string;
  subcription!: Subscription;
  currentOwner!: Owner;

  constructor(
    private httpService: HttpService,
    private router: Router, 
    private ownerService: OwnerService) { }

  set ownerFilter(str:string){
    this._ownerFilter=str;
    this.filterOwner();
  }

  get ownerFilter():string{
    return this._ownerFilter;
  }

  filterOwner(){
    this.filteredOwnersList = this.ownersList.filter(o=>o.fName.includes(this._ownerFilter));
  }

  ngOnInit(): void {
    this.subcription = this.httpService.getAllOwners().subscribe({
      next: data => {
        this.filteredOwnersList = data;
        this.ownersList = this.filteredOwnersList;
      }
    });
  }

  ngOnDestroy(){
    this.subcription.unsubscribe();
  }

  getUpdateOwner(id: number){
    this.router.navigate(['/owner/owner-edit',id]);
  }

  getDeleteOwner(id: number){
    this.router.navigate(['/owner/owner-delete',id]);
  }

  

}
