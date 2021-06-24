import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../Owner.model';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'pet-owner-delete',
  templateUrl: './owner-delete.component.html',
  styleUrls: ['./owner-delete.component.scss']
})
export class OwnerDeleteComponent implements OnInit {

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

  getOwner(id: any): void {
    this.ownerService.read(id)
      .subscribe(
        owner => {
          this.currentOwner = owner;
          console.log(owner);
          
        },
        error => {
          console.log(error);
        });
  }

  deleteOwner(): void {
    this.ownerService.delete(this.currentOwner.id)
      .subscribe(
        response => {
          console.log(response);
          this.message = "you have successfully deleted";
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
