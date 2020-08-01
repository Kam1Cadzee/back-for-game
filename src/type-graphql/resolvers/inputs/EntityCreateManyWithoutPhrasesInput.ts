import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutPhrasesInput } from "../inputs/EntityCreateWithoutPhrasesInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityCreateManyWithoutPhrasesInput {
  @TypeGraphQL.Field(_type => [EntityCreateWithoutPhrasesInput], {
    nullable: true,
    description: undefined
  })
  create?: EntityCreateWithoutPhrasesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: EntityWhereUniqueInput[] | null | undefined;
}
