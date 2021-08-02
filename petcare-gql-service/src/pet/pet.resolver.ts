import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { PetService } from './pet.service';
import { Pet } from './entities/pet.entity';
import { PetCreateDto } from './dto/create-pet.input';
import { PetUpdateDto } from './dto/update-pet.input';
import { Owner } from 'src/owner/entities/owner.entity';

@Resolver(() => Pet)
export class PetResolver {
  constructor(private readonly petService: PetService) {}

  @Mutation(() => Pet, {name:'createPet'})
  createPet(@Args('pet') createPet: PetCreateDto) {
    return this.petService.create(createPet);
  }

  @Query(() => [Pet], { name: 'getAllPets' })
  findAll() {
    return this.petService.findAll();
  }

  @Query(() => Pet, { name: 'getPet' })
  findOne(@Args('id') id: number) {
    return this.petService.findOne(id);
  }

  @Mutation(() => Pet, {name: 'updatePet'})
  updatePet(@Args('pet') updatePet: PetUpdateDto) {
    return this.petService.update(updatePet.id, updatePet);
  }

  @Mutation(() => Pet, {name: 'deletePet'})
  removePet(@Args('id') id: number) {
    return this.petService.remove(id);
  }

  @ResolveField(()=>Owner)
  getOwner(@Parent() owner: Owner){
    return this.petService.getOwner(owner.id);
  }
}
