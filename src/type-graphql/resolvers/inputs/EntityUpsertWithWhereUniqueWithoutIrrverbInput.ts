import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutIrrverbInput } from "../inputs/EntityCreateWithoutIrrverbInput";
import { EntityUpdateWithoutIrrverbDataInput } from "../inputs/EntityUpdateWithoutIrrverbDataInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpsertWithWhereUniqueWithoutIrrverbInput {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: EntityWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntityUpdateWithoutIrrverbDataInput, {
    nullable: false,
    description: undefined
  })
  update!: EntityUpdateWithoutIrrverbDataInput;

  @TypeGraphQL.Field(_type => EntityCreateWithoutIrrverbInput, {
    nullable: false,
    description: undefined
  })
  create!: EntityCreateWithoutIrrverbInput;
}
