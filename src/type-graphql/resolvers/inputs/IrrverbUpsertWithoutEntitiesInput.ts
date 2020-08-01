import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { IrrverbCreateWithoutEntitiesInput } from "../inputs/IrrverbCreateWithoutEntitiesInput";
import { IrrverbUpdateWithoutEntitiesDataInput } from "../inputs/IrrverbUpdateWithoutEntitiesDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class IrrverbUpsertWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => IrrverbUpdateWithoutEntitiesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: IrrverbUpdateWithoutEntitiesDataInput;

  @TypeGraphQL.Field(_type => IrrverbCreateWithoutEntitiesInput, {
    nullable: false,
    description: undefined
  })
  create!: IrrverbCreateWithoutEntitiesInput;
}
