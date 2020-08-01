import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SentenceWhereInput } from "../inputs/SentenceWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SentenceFilter {
  @TypeGraphQL.Field(_type => SentenceWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: SentenceWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => SentenceWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: SentenceWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => SentenceWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: SentenceWhereInput | null | undefined;
}
