import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { IrrverbCreateWithoutEntitiesInput } from "../inputs/IrrverbCreateWithoutEntitiesInput";
import { IrrverbWhereUniqueInput } from "../inputs/IrrverbWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class IrrverbCreateOneWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => IrrverbCreateWithoutEntitiesInput, {
    nullable: true,
    description: undefined
  })
  create?: IrrverbCreateWithoutEntitiesInput | null | undefined;

  @TypeGraphQL.Field(_type => IrrverbWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: IrrverbWhereUniqueInput | null | undefined;
}
