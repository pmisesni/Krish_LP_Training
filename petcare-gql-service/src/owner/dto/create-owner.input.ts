import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class OwnerCreateDto{

    @Field()
    fName: String;
    @Field({nullable: true})
    lName: String;
    @Field({nullable: true})
    addressline1: String;
    @Field({nullable: true})
    addressline2: String;
    @Field(()=>Int, {nullable: true})
    mobile: number;
}