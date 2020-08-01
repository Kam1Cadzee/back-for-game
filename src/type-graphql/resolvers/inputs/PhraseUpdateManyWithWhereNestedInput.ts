import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PhraseScalarWhereInput } from "../inputs/PhraseScalarWhereInput";
import { PhraseUpdateManyDataInput } from "../inputs/PhraseUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PhraseUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => PhraseScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: PhraseScalarWhereInput;

  @TypeGraphQL.Field(_type => PhraseUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: PhraseUpdateManyDataInput;
}
