import { Component, OnInit, Output } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Owner } from '../Owner.model';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'pet-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.scss']
})
export class OwnerCreateComponent implements OnInit {

    id!: number;
    fName!: string;
    lName!: string;
    addressline1!: string;
    addressline2!: string;
    mobile!: number;
    submitted: boolean = false;

  constructor(private ownerService: OwnerService, private router: Router) { }

  ngOnInit(): void {
  }

  submitOwner(): void{
    const owner: Owner = {
      id: this.id,
      fName: this.fName,
      lName: this.lName,
      addressline1: this.addressline1,
      addressline2: this.addressline2,
      mobile: this.mobile
    }

    this.ownerService.create(owner).subscribe(
      response=>{
      console.log(response);
      this.submitted = true;
      this.router.navigate(['/owner']);
    },
    error=>{
      console.log(console.error());
    }
    )
  };

  cancelOwner(): void {
    this.submitted = false;
    this.id=0,
    this.fName = "",
    this.lName = "",
    this.addressline1 = "",
    this.addressline2 = "",
    this.mobile = 0;
    this.router.navigate(['/home'])
    };
  }
