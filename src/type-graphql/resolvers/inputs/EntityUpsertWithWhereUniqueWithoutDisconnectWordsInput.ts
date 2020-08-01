import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutDisconnectWordsInput } from "../inputs/EntityCreateWithoutDisconnectWordsInput";
import { EntityUpdateWithoutDisconnectWordsDataInput } from "../inputs/EntityUpdateWithoutDisconnectWordsDataInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpsertWithWhereUniqueWithoutDisconnectWordsInput {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: EntityWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntityUpdateWithoutDisconnectWordsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: EntityUpdateWithoutDisconnectWordsDataInput;

  @TypeGraphQL.Field(_type => EntityCreateWithoutDisconnectWordsInput, {
    nullable: false,
    description: undefined
  })
  create!: EntityCreateWithoutDisconnectWordsInput;
}
