import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordScalarWhereInput } from "../inputs/WordScalarWhereInput";
import { WordUpdateManyDataInput } from "../inputs/WordUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => WordScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: WordScalarWhereInput;

  @TypeGraphQL.Field(_type => WordUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: WordUpdateManyDataInput;
}
