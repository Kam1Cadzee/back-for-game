import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutDisconnectPhrasesInput } from "../inputs/EntityCreateWithoutDisconnectPhrasesInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityCreateManyWithoutDisconnectPhrasesInput {
  @TypeGraphQL.Field(_type => [EntityCreateWithoutDisconnectPhrasesInput], {
    nullable: true,
    description: undefined
  })
  create?: EntityCreateWithoutDisconnectPhrasesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: EntityWhereUniqueInput[] | null | undefined;
}
