import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutUserInput } from "../inputs/EntityCreateWithoutUserInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityCreateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [EntityCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: EntityCreateWithoutUserInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: EntityWhereUniqueInput[] | null | undefined;
}
