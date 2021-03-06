import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerCreateComponent } from '../owner/owner-create/owner-create.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ownerImage: string="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2018/04/23073318/6-Benefits-of-Working-from-Home-as-a-Pet-Owner.jpg";
  petImage: string="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/bt_8r_1_660x450_090419060516.jpg";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createPet(){
    this.router.navigate(['/pet/pet-create']);
  }

  createOwner(){
    this.router.navigate(['/owner/owner-create']);
  }

}
