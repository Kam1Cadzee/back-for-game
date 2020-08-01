import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PhraseCreateWithoutEntitiesInput } from "../inputs/PhraseCreateWithoutEntitiesInput";
import { PhraseWhereUniqueInput } from "../inputs/PhraseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PhraseCreateManyWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => [PhraseCreateWithoutEntitiesInput], {
    nullable: true,
    description: undefined
  })
  create?: PhraseCreateWithoutEntitiesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [PhraseWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: PhraseWhereUniqueInput[] | null | undefined;
}
