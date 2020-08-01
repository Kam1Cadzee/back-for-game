import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityUpdateWithoutDisconnectSentencesDataInput } from "../inputs/EntityUpdateWithoutDisconnectSentencesDataInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpdateWithWhereUniqueWithoutDisconnectSentencesInput {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: EntityWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntityUpdateWithoutDisconnectSentencesDataInput, {
    nullable: false,
    description: undefined
  })
  data!: EntityUpdateWithoutDisconnectSentencesDataInput;
}
