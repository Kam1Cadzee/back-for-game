import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordWhereInput } from "../inputs/WordWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordFilter {
  @TypeGraphQL.Field(_type => WordWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: WordWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => WordWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: WordWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => WordWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: WordWhereInput | null | undefined;
}
