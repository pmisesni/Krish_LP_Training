import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class OwnerUpdateDto{

    @Field()
    id: number;
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