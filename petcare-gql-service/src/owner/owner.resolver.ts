import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Owner } from 'src/owner/entities/owner.entity';
import { OwnerCreateDto } from './dto/create-owner.input';
import { OwnerUpdateDto } from './dto/update-owner-input';
import { OwnerService } from './owner.service';

@Resolver(()=>Owner)
export class OwnerResolver {

    constructor(private ownerService: OwnerService){}

    @Query(()=>[Owner], {name: 'getAllOwners'})
    findAll(){
        return this.ownerService.findAll();
    }

    @Mutation(()=>Owner, {name:'createOwner'})
    create(@Args('owner') owner: OwnerCreateDto){
        return this.ownerService.create(owner);
    }

    @Query(()=>Owner, {name:'getOwner'})
    findOne(@Args('id') id: number){
        return this.ownerService.findOne(id);
    }

    @Mutation(()=>Owner, {name: 'updateOwner'})
    update(@Args('owner') owner: OwnerUpdateDto){
        return this.ownerService.update(owner.id,owner);
    }

    @Mutation(()=>Owner, {name: 'deleteOwner'})
    remove(@Args('id') id:number){
        return this.ownerService.remove(id);

    }

}
