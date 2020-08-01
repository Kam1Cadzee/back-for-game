import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PhraseCreateWithoutEntitiesInput } from "../inputs/PhraseCreateWithoutEntitiesInput";
import { PhraseUpdateWithoutEntitiesDataInput } from "../inputs/PhraseUpdateWithoutEntitiesDataInput";
import { PhraseWhereUniqueInput } from "../inputs/PhraseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PhraseUpsertWithWhereUniqueWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => PhraseWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: PhraseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PhraseUpdateWithoutEntitiesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: PhraseUpdateWithoutEntitiesDataInput;

  @TypeGraphQL.Field(_type => PhraseCreateWithoutEntitiesInput, {
    nullable: false,
    description: undefined
  })
  create!: PhraseCreateWithoutEntitiesInput;
}
