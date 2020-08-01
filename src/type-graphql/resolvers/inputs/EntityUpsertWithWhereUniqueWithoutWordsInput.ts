import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutWordsInput } from "../inputs/EntityCreateWithoutWordsInput";
import { EntityUpdateWithoutWordsDataInput } from "../inputs/EntityUpdateWithoutWordsDataInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpsertWithWhereUniqueWithoutWordsInput {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: EntityWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntityUpdateWithoutWordsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: EntityUpdateWithoutWordsDataInput;

  @TypeGraphQL.Field(_type => EntityCreateWithoutWordsInput, {
    nullable: false,
    description: undefined
  })
  create!: EntityCreateWithoutWordsInput;
}
