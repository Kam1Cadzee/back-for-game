import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityUpdateWithoutDisconnectPhrasesDataInput } from "../inputs/EntityUpdateWithoutDisconnectPhrasesDataInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpdateWithWhereUniqueWithoutDisconnectPhrasesInput {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: EntityWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntityUpdateWithoutDisconnectPhrasesDataInput, {
    nullable: false,
    description: undefined
  })
  data!: EntityUpdateWithoutDisconnectPhrasesDataInput;
}
