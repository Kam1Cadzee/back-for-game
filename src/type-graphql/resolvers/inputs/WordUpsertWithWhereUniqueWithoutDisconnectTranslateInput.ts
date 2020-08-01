import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordCreateWithoutDisconnectTranslateInput } from "../inputs/WordCreateWithoutDisconnectTranslateInput";
import { WordUpdateWithoutDisconnectTranslateDataInput } from "../inputs/WordUpdateWithoutDisconnectTranslateDataInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpsertWithWhereUniqueWithoutDisconnectTranslateInput {
  @TypeGraphQL.Field(_type => WordWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: WordWhereUniqueInput;

  @TypeGraphQL.Field(_type => WordUpdateWithoutDisconnectTranslateDataInput, {
    nullable: false,
    description: undefined
  })
  update!: WordUpdateWithoutDisconnectTranslateDataInput;

  @TypeGraphQL.Field(_type => WordCreateWithoutDisconnectTranslateInput, {
    nullable: false,
    description: undefined
  })
  create!: WordCreateWithoutDisconnectTranslateInput;
}
