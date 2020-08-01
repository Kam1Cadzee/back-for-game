import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityUpdateWithoutIrrverbDataInput } from "../inputs/EntityUpdateWithoutIrrverbDataInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpdateWithWhereUniqueWithoutIrrverbInput {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: EntityWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntityUpdateWithoutIrrverbDataInput, {
    nullable: false,
    description: undefined
  })
  data!: EntityUpdateWithoutIrrverbDataInput;
}
