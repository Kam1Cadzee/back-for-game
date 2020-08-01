import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutWordsInput } from "../inputs/EntityCreateWithoutWordsInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityCreateManyWithoutWordsInput {
  @TypeGraphQL.Field(_type => [EntityCreateWithoutWordsInput], {
    nullable: true,
    description: undefined
  })
  create?: EntityCreateWithoutWordsInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: EntityWhereUniqueInput[] | null | undefined;
}
