import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SentenceScalarWhereInput } from "../inputs/SentenceScalarWhereInput";
import { SentenceUpdateManyDataInput } from "../inputs/SentenceUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SentenceUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => SentenceScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: SentenceScalarWhereInput;

  @TypeGraphQL.Field(_type => SentenceUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: SentenceUpdateManyDataInput;
}
