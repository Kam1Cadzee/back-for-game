import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TranslateUpdateWithoutWordsDataInput } from "../inputs/TranslateUpdateWithoutWordsDataInput";
import { TranslateWhereUniqueInput } from "../inputs/TranslateWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TranslateUpdateWithWhereUniqueWithoutWordsInput {
  @TypeGraphQL.Field(_type => TranslateWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TranslateWhereUniqueInput;

  @TypeGraphQL.Field(_type => TranslateUpdateWithoutWordsDataInput, {
    nullable: false,
    description: undefined
  })
  data!: TranslateUpdateWithoutWordsDataInput;
}
