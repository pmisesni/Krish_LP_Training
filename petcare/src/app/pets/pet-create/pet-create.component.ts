import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pet } from '../Pet.model';
import { PetService } from '../pet.service';

@Component({
  selector: 'pet-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.scss']
})
export class PetCreateComponent implements OnInit {

  id!: number;
  img!: any;
  petName!: string;
  petType!: string;
  submitted: boolean = false;

constructor(private petService: PetService, private router: Router) { }

ngOnInit(): void {
}

submitPet(): void{
  const pet: Pet = {
    id: this.id,
    img: this.img,
    petName: this.petName,
    petType: this.petType
  }

  this.petService.create(pet).subscribe(
    response=>{
    console.log(response);
    this.submitted = true;
    this.router.navigate(['/pet']);
  },
  error=>{
    console.log(console.error());
  }
  )
  
};


selectFile(event: any) {
  
  var mimeType = event.target.files[0].type;
  
  if (mimeType.match(/image\/*/) == null) {
    alert("only images are supported!");
    return;
  }
  
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  
  reader.onload = (_event) => {
    this.img = reader.result; 
  }
}

cancelPet(): void {
  this.submitted = false;
  this.id = 0;
  this.img = null;
  this.petName="";
  this.petType="";
  this.router.navigate(['/home']);
  };

}
