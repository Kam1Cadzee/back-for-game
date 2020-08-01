import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordCreateWithoutEntitiesInput } from "../inputs/WordCreateWithoutEntitiesInput";
import { WordUpdateWithoutEntitiesDataInput } from "../inputs/WordUpdateWithoutEntitiesDataInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpsertWithWhereUniqueWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => WordWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: WordWhereUniqueInput;

  @TypeGraphQL.Field(_type => WordUpdateWithoutEntitiesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: WordUpdateWithoutEntitiesDataInput;

  @TypeGraphQL.Field(_type => WordCreateWithoutEntitiesInput, {
    nullable: false,
    description: undefined
  })
  create!: WordCreateWithoutEntitiesInput;
}
