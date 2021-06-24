import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../Pet.model';
import { PetService } from '../pet.service';

@Component({
  selector: 'pet-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss']
})
export class PetEditComponent implements OnInit {

  currentPet!: Pet;
  message = '';
  subscription!: any;

  constructor(
    private petService: PetService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPet(this.actRoute.snapshot.paramMap.get('id'));
  }

  getPet(id: any){
    this.petService.read(id)
      .subscribe(
        pet => {
          this.currentPet = pet;
          console.log(pet);
          
        },
        error => {
          console.log(error);
        });
        
  }

  updatePet(): void {
    this.petService.update(this.currentPet.id, this.currentPet)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
          this.router.navigate(['/pet']);
        },
        error => {
          console.log(error);
        });
  }

  selectFile(event: any) {
  
    var mimeType = event.target.files[0].type;
    
    if (mimeType.match(/image\/*/) == null) {
      alert("only images are supported!");
      return;
    }
    
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    
    reader.onload = (_event) => {
      this.currentPet.img = reader.result; 
    }
  }

  cancelPet(): void {
    this.currentPet.id=0;
    this.currentPet.petName = "";
    this.currentPet.petType = "";
    this.currentPet.img = null;
    this.router.navigate(['/pet']);
    };

}
