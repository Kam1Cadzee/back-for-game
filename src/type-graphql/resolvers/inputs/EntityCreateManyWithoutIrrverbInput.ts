import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutIrrverbInput } from "../inputs/EntityCreateWithoutIrrverbInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityCreateManyWithoutIrrverbInput {
  @TypeGraphQL.Field(_type => [EntityCreateWithoutIrrverbInput], {
    nullable: true,
    description: undefined
  })
  create?: EntityCreateWithoutIrrverbInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: EntityWhereUniqueInput[] | null | undefined;
}
