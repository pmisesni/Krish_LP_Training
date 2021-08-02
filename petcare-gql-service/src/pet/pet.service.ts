import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApolloServer } from 'apollo-server-express';
import { Owner } from 'src/owner/entities/owner.entity';
import { OwnerService } from 'src/owner/owner.service';
import { Repository } from 'typeorm';
import { PetCreateDto } from './dto/create-pet.input';
import { PetUpdateDto } from './dto/update-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {

  constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>,
  private ownerService: OwnerService){}

  async create(createPet: PetCreateDto): Promise<Pet> {
    let pet = this.petRepository.create(createPet);
    return await this.petRepository.save(pet);
  }

  async findAll(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async findOne(id: number): Promise<Pet> {
    return await this.petRepository.findOne(id);
  }

  async update(id: number, updatePet: PetUpdateDto): Promise<Pet> {
    let pet = this.petRepository.create(updatePet);
    pet.id = id;
    return await this.petRepository.save(pet);
  }

  async remove(id: number): Promise<Pet> {
      let pet = this.findOne(id);

    if(pet){
      let ret = await this.petRepository.delete(id);

      if(ret.affected === 1){
        return pet;
      } 
  }
  // throw new NotFoundException(`No record found for id = ${id}`);
}

  async getOwner(id: number): Promise<Owner>{
    return this.ownerService.findOne(id);
  }
}
