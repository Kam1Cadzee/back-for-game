import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TranslateCreateWithoutDisconnectWordsInput } from "../inputs/TranslateCreateWithoutDisconnectWordsInput";
import { TranslateWhereUniqueInput } from "../inputs/TranslateWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TranslateCreateManyWithoutDisconnectWordsInput {
  @TypeGraphQL.Field(_type => [TranslateCreateWithoutDisconnectWordsInput], {
    nullable: true,
    description: undefined
  })
  create?: TranslateCreateWithoutDisconnectWordsInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [TranslateWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: TranslateWhereUniqueInput[] | null | undefined;
}
