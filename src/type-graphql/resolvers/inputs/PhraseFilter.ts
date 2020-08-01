import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PhraseWhereInput } from "../inputs/PhraseWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PhraseFilter {
  @TypeGraphQL.Field(_type => PhraseWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: PhraseWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => PhraseWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: PhraseWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => PhraseWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: PhraseWhereInput | null | undefined;
}
