import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutPhrasesInput } from "../inputs/EntityCreateWithoutPhrasesInput";
import { EntityUpdateWithoutPhrasesDataInput } from "../inputs/EntityUpdateWithoutPhrasesDataInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpsertWithWhereUniqueWithoutPhrasesInput {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: EntityWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntityUpdateWithoutPhrasesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: EntityUpdateWithoutPhrasesDataInput;

  @TypeGraphQL.Field(_type => EntityCreateWithoutPhrasesInput, {
    nullable: false,
    description: undefined
  })
  create!: EntityCreateWithoutPhrasesInput;
}
