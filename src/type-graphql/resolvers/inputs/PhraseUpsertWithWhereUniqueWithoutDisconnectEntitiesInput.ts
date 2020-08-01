import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PhraseCreateWithoutDisconnectEntitiesInput } from "../inputs/PhraseCreateWithoutDisconnectEntitiesInput";
import { PhraseUpdateWithoutDisconnectEntitiesDataInput } from "../inputs/PhraseUpdateWithoutDisconnectEntitiesDataInput";
import { PhraseWhereUniqueInput } from "../inputs/PhraseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PhraseUpsertWithWhereUniqueWithoutDisconnectEntitiesInput {
  @TypeGraphQL.Field(_type => PhraseWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: PhraseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PhraseUpdateWithoutDisconnectEntitiesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: PhraseUpdateWithoutDisconnectEntitiesDataInput;

  @TypeGraphQL.Field(_type => PhraseCreateWithoutDisconnectEntitiesInput, {
    nullable: false,
    description: undefined
  })
  create!: PhraseCreateWithoutDisconnectEntitiesInput;
}
