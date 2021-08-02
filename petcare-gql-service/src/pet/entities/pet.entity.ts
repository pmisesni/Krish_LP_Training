import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from 'src/owner/entities/owner.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Pet {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Field({nullable: true})
  @Column({nullable: true})
  img: String;
  @Field({nullable: true})
  @Column({nullable: true})
  petName: String;
  @Field()
  @Column()
  petType: String;

  @ManyToOne(()=>Owner, owner=>owner.pets)
  @Field(()=>Owner)
  owner: Owner

  @Field()
  @Column()
  ownerId: number;

  
}
