import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordUpdateWithoutEntitiesDataInput } from "../inputs/WordUpdateWithoutEntitiesDataInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpdateWithWhereUniqueWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => WordWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: WordWhereUniqueInput;

  @TypeGraphQL.Field(_type => WordUpdateWithoutEntitiesDataInput, {
    nullable: false,
    description: undefined
  })
  data!: WordUpdateWithoutEntitiesDataInput;
}
