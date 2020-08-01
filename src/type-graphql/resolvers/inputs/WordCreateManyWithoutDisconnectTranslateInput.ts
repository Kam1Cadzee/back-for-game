import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordCreateWithoutDisconnectTranslateInput } from "../inputs/WordCreateWithoutDisconnectTranslateInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordCreateManyWithoutDisconnectTranslateInput {
  @TypeGraphQL.Field(_type => [WordCreateWithoutDisconnectTranslateInput], {
    nullable: true,
    description: undefined
  })
  create?: WordCreateWithoutDisconnectTranslateInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [WordWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: WordWhereUniqueInput[] | null | undefined;
}
