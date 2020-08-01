import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordUpdateWithoutUserDataInput } from "../inputs/WordUpdateWithoutUserDataInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => WordWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: WordWhereUniqueInput;

  @TypeGraphQL.Field(_type => WordUpdateWithoutUserDataInput, {
    nullable: false,
    description: undefined
  })
  data!: WordUpdateWithoutUserDataInput;
}
