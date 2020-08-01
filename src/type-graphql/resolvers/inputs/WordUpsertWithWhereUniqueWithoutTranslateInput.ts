import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordCreateWithoutTranslateInput } from "../inputs/WordCreateWithoutTranslateInput";
import { WordUpdateWithoutTranslateDataInput } from "../inputs/WordUpdateWithoutTranslateDataInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpsertWithWhereUniqueWithoutTranslateInput {
  @TypeGraphQL.Field(_type => WordWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: WordWhereUniqueInput;

  @TypeGraphQL.Field(_type => WordUpdateWithoutTranslateDataInput, {
    nullable: false,
    description: undefined
  })
  update!: WordUpdateWithoutTranslateDataInput;

  @TypeGraphQL.Field(_type => WordCreateWithoutTranslateInput, {
    nullable: false,
    description: undefined
  })
  create!: WordCreateWithoutTranslateInput;
}
