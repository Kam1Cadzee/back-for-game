import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TranslateScalarWhereInput } from "../inputs/TranslateScalarWhereInput";
import { TranslateUpdateManyDataInput } from "../inputs/TranslateUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TranslateUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => TranslateScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: TranslateScalarWhereInput;

  @TypeGraphQL.Field(_type => TranslateUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: TranslateUpdateManyDataInput;
}
