import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutDisconnectWordsInput } from "../inputs/EntityCreateWithoutDisconnectWordsInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityCreateManyWithoutDisconnectWordsInput {
  @TypeGraphQL.Field(_type => [EntityCreateWithoutDisconnectWordsInput], {
    nullable: true,
    description: undefined
  })
  create?: EntityCreateWithoutDisconnectWordsInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: EntityWhereUniqueInput[] | null | undefined;
}
