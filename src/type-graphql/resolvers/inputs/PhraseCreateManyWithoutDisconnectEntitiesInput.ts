import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PhraseCreateWithoutDisconnectEntitiesInput } from "../inputs/PhraseCreateWithoutDisconnectEntitiesInput";
import { PhraseWhereUniqueInput } from "../inputs/PhraseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PhraseCreateManyWithoutDisconnectEntitiesInput {
  @TypeGraphQL.Field(_type => [PhraseCreateWithoutDisconnectEntitiesInput], {
    nullable: true,
    description: undefined
  })
  create?: PhraseCreateWithoutDisconnectEntitiesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [PhraseWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: PhraseWhereUniqueInput[] | null | undefined;
}
