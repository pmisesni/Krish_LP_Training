import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owner/entities/owner.entity';
import { Repository } from 'typeorm';
import { OwnerCreateDto } from './dto/create-owner.input';
import { OwnerUpdateDto } from './dto/update-owner-input';

@Injectable()
export class OwnerService {

    constructor(@InjectRepository(Owner) private ownerRepository: Repository<Owner>){}

    async findAll(): Promise<Owner[]>{
        return await this.ownerRepository.find();
    }

    async create(createOwner: OwnerCreateDto): Promise<Owner>{
        let owner = this.ownerRepository.create(createOwner);
        return await this.ownerRepository.save(owner);
    }

    async findOne(id: number): Promise<Owner>{
        return await this.ownerRepository.findOne(id, {relations: ["pet"]});
    }

    async update(id: number, updateOwner: OwnerUpdateDto): Promise<Owner>{
        let owner: Owner = this.ownerRepository.create(updateOwner);
        owner.id = id;
        return await this.ownerRepository.save(owner);
    }

    async remove(id: number): Promise<Owner>{
            let owner = this.findOne(id);

            if(owner){
                let ret = await this.ownerRepository.delete(id);
                if(ret.affected === 1) return owner;
            }
        
        // throw new NotFoundException(`record cannot find by id ${id}`);
    }
}
