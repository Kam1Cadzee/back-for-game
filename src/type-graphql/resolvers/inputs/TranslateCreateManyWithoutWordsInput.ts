import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TranslateCreateWithoutWordsInput } from "../inputs/TranslateCreateWithoutWordsInput";
import { TranslateWhereUniqueInput } from "../inputs/TranslateWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TranslateCreateManyWithoutWordsInput {
  @TypeGraphQL.Field(_type => [TranslateCreateWithoutWordsInput], {
    nullable: true,
    description: undefined
  })
  create?: TranslateCreateWithoutWordsInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [TranslateWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: TranslateWhereUniqueInput[] | null | undefined;
}
