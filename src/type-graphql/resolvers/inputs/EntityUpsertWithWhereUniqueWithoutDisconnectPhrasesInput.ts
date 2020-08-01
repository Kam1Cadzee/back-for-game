import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutDisconnectPhrasesInput } from "../inputs/EntityCreateWithoutDisconnectPhrasesInput";
import { EntityUpdateWithoutDisconnectPhrasesDataInput } from "../inputs/EntityUpdateWithoutDisconnectPhrasesDataInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpsertWithWhereUniqueWithoutDisconnectPhrasesInput {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: EntityWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntityUpdateWithoutDisconnectPhrasesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: EntityUpdateWithoutDisconnectPhrasesDataInput;

  @TypeGraphQL.Field(_type => EntityCreateWithoutDisconnectPhrasesInput, {
    nullable: false,
    description: undefined
  })
  create!: EntityCreateWithoutDisconnectPhrasesInput;
}
