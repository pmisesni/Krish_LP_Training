import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../Pet.model';
import { PetService } from '../pet.service';

@Component({
  selector: 'pet-pet-delete',
  templateUrl: './pet-delete.component.html',
  styleUrls: ['./pet-delete.component.scss']
})
export class PetDeleteComponent implements OnInit {

  currentPet!: Pet;
  message = '';

  constructor(
    private petService: PetService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPet(this.actRoute.snapshot.paramMap.get('id'));
  }

  getPet(id: any): void {
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

  deletePet(): void {
    this.petService.delete(this.currentPet.id)
      .subscribe(
        response => {
          console.log(response);
          this.message = "you have successfully deleted";
          this.router.navigate(['/pet']);
        },
        error => {
          console.log(error);
        });
  }

  cancelPet(): void {
    this.currentPet.id=0,
    this.currentPet.petName = "",
    this.currentPet.petType = "",
    this.currentPet.img = null,
    this.router.navigate(['/pet'])
    };

}
