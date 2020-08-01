import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityUpdateWithoutSentencesDataInput } from "../inputs/EntityUpdateWithoutSentencesDataInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpdateWithWhereUniqueWithoutSentencesInput {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: EntityWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntityUpdateWithoutSentencesDataInput, {
    nullable: false,
    description: undefined
  })
  data!: EntityUpdateWithoutSentencesDataInput;
}
