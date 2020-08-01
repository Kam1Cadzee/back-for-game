import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PhraseUpdateWithoutEntitiesDataInput } from "../inputs/PhraseUpdateWithoutEntitiesDataInput";
import { PhraseWhereUniqueInput } from "../inputs/PhraseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PhraseUpdateWithWhereUniqueWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => PhraseWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: PhraseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PhraseUpdateWithoutEntitiesDataInput, {
    nullable: false,
    description: undefined
  })
  data!: PhraseUpdateWithoutEntitiesDataInput;
}
