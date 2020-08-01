import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordCreateWithoutUserInput } from "../inputs/WordCreateWithoutUserInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordCreateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [WordCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: WordCreateWithoutUserInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [WordWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: WordWhereUniqueInput[] | null | undefined;
}
