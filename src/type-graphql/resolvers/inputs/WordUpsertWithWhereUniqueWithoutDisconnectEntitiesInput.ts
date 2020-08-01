import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordCreateWithoutDisconnectEntitiesInput } from "../inputs/WordCreateWithoutDisconnectEntitiesInput";
import { WordUpdateWithoutDisconnectEntitiesDataInput } from "../inputs/WordUpdateWithoutDisconnectEntitiesDataInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpsertWithWhereUniqueWithoutDisconnectEntitiesInput {
  @TypeGraphQL.Field(_type => WordWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: WordWhereUniqueInput;

  @TypeGraphQL.Field(_type => WordUpdateWithoutDisconnectEntitiesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: WordUpdateWithoutDisconnectEntitiesDataInput;

  @TypeGraphQL.Field(_type => WordCreateWithoutDisconnectEntitiesInput, {
    nullable: false,
    description: undefined
  })
  create!: WordCreateWithoutDisconnectEntitiesInput;
}
