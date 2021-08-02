import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Pet } from "src/pet/entities/pet.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Owner{

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: number;
    @Field()
    @Column()
    fName: String;
    @Field({nullable: true})
    @Column({nullable: true})
    lName: String;
    @Field({nullable: true})
    @Column({nullable: true})
    addressline1: String;
    @Field({nullable: true})
    @Column({nullable: true})
    addressline2: String;
    @Field(()=>Int, {nullable: true})
    @Column({nullable: true})
    mobile: number;

    @OneToMany(()=>Pet, pet=>pet.owner)
    @Field(()=>[Pet], {nullable: true})
    pets: Pet[]
}