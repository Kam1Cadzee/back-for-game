import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TranslateCreateWithoutWordsInput } from "../inputs/TranslateCreateWithoutWordsInput";
import { TranslateUpdateWithoutWordsDataInput } from "../inputs/TranslateUpdateWithoutWordsDataInput";
import { TranslateWhereUniqueInput } from "../inputs/TranslateWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TranslateUpsertWithWhereUniqueWithoutWordsInput {
  @TypeGraphQL.Field(_type => TranslateWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TranslateWhereUniqueInput;

  @TypeGraphQL.Field(_type => TranslateUpdateWithoutWordsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: TranslateUpdateWithoutWordsDataInput;

  @TypeGraphQL.Field(_type => TranslateCreateWithoutWordsInput, {
    nullable: false,
    description: undefined
  })
  create!: TranslateCreateWithoutWordsInput;
}
