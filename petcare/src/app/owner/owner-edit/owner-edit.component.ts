import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerComponent } from '../owner.component';
import { Owner } from '../Owner.model';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'pet-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.scss']
})
export class OwnerEditComponent implements OnInit {

  currentOwner!: Owner;
  message = '';

  constructor(
    private ownerService: OwnerService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getOwner(this.actRoute.snapshot.paramMap.get('id'));
  }

  getOwner(id: any){
    this.ownerService.read(id)
      .subscribe(
        owner => {
          this.currentOwner = owner;
        },
        error => {
          console.log(error);
        });
        
  }

  updateOwner(): void {
    this.ownerService.update(this.currentOwner.id, this.currentOwner)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
          this.router.navigate(['/owner']);
        },
        error => {
          console.log(error);
        });
  }

  cancelOwner(): void {
    this.currentOwner.id=0,
    this.currentOwner.fName = "",
    this.currentOwner.lName = "",
    this.currentOwner.addressline1 = "",
    this.currentOwner.addressline2 = "",
    this.currentOwner.mobile = 0;
    this.router.navigate(['/owner'])
    };

}
