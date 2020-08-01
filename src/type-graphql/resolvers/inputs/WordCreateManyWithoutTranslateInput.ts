import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordCreateWithoutTranslateInput } from "../inputs/WordCreateWithoutTranslateInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordCreateManyWithoutTranslateInput {
  @TypeGraphQL.Field(_type => [WordCreateWithoutTranslateInput], {
    nullable: true,
    description: undefined
  })
  create?: WordCreateWithoutTranslateInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [WordWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: WordWhereUniqueInput[] | null | undefined;
}
