import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class PetUpdateDto {
  
  @Field(() => Int)
  id: number;
  @Field({nullable: true})
  img: String;
  @Field({nullable: true})
  petName: String;
  @Field()
  petType: String;
  @Field()
  ownerId: number;
}
