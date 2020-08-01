import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordUpdateWithoutDisconnectTranslateDataInput } from "../inputs/WordUpdateWithoutDisconnectTranslateDataInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpdateWithWhereUniqueWithoutDisconnectTranslateInput {
  @TypeGraphQL.Field(_type => WordWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: WordWhereUniqueInput;

  @TypeGraphQL.Field(_type => WordUpdateWithoutDisconnectTranslateDataInput, {
    nullable: false,
    description: undefined
  })
  data!: WordUpdateWithoutDisconnectTranslateDataInput;
}
