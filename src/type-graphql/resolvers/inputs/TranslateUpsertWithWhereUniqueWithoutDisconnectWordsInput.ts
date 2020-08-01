import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TranslateCreateWithoutDisconnectWordsInput } from "../inputs/TranslateCreateWithoutDisconnectWordsInput";
import { TranslateUpdateWithoutDisconnectWordsDataInput } from "../inputs/TranslateUpdateWithoutDisconnectWordsDataInput";
import { TranslateWhereUniqueInput } from "../inputs/TranslateWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TranslateUpsertWithWhereUniqueWithoutDisconnectWordsInput {
  @TypeGraphQL.Field(_type => TranslateWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TranslateWhereUniqueInput;

  @TypeGraphQL.Field(_type => TranslateUpdateWithoutDisconnectWordsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: TranslateUpdateWithoutDisconnectWordsDataInput;

  @TypeGraphQL.Field(_type => TranslateCreateWithoutDisconnectWordsInput, {
    nullable: false,
    description: undefined
  })
  create!: TranslateCreateWithoutDisconnectWordsInput;
}
