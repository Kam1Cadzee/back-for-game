import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordUpdateWithoutDisconnectEntitiesDataInput } from "../inputs/WordUpdateWithoutDisconnectEntitiesDataInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpdateWithWhereUniqueWithoutDisconnectEntitiesInput {
  @TypeGraphQL.Field(_type => WordWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: WordWhereUniqueInput;

  @TypeGraphQL.Field(_type => WordUpdateWithoutDisconnectEntitiesDataInput, {
    nullable: false,
    description: undefined
  })
  data!: WordUpdateWithoutDisconnectEntitiesDataInput;
}
