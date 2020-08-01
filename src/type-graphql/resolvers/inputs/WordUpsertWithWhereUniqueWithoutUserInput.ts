import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordCreateWithoutUserInput } from "../inputs/WordCreateWithoutUserInput";
import { WordUpdateWithoutUserDataInput } from "../inputs/WordUpdateWithoutUserDataInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => WordWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: WordWhereUniqueInput;

  @TypeGraphQL.Field(_type => WordUpdateWithoutUserDataInput, {
    nullable: false,
    description: undefined
  })
  update!: WordUpdateWithoutUserDataInput;

  @TypeGraphQL.Field(_type => WordCreateWithoutUserInput, {
    nullable: false,
    description: undefined
  })
  create!: WordCreateWithoutUserInput;
}
