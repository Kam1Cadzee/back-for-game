import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityUpdateWithoutDisconnectWordsDataInput } from "../inputs/EntityUpdateWithoutDisconnectWordsDataInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpdateWithWhereUniqueWithoutDisconnectWordsInput {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: EntityWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntityUpdateWithoutDisconnectWordsDataInput, {
    nullable: false,
    description: undefined
  })
  data!: EntityUpdateWithoutDisconnectWordsDataInput;
}
