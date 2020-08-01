import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordUpdateWithoutTranslateDataInput } from "../inputs/WordUpdateWithoutTranslateDataInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpdateWithWhereUniqueWithoutTranslateInput {
  @TypeGraphQL.Field(_type => WordWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: WordWhereUniqueInput;

  @TypeGraphQL.Field(_type => WordUpdateWithoutTranslateDataInput, {
    nullable: false,
    description: undefined
  })
  data!: WordUpdateWithoutTranslateDataInput;
}
