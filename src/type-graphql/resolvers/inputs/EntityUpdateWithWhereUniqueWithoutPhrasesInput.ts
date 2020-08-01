import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityUpdateWithoutPhrasesDataInput } from "../inputs/EntityUpdateWithoutPhrasesDataInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpdateWithWhereUniqueWithoutPhrasesInput {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: EntityWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntityUpdateWithoutPhrasesDataInput, {
    nullable: false,
    description: undefined
  })
  data!: EntityUpdateWithoutPhrasesDataInput;
}
