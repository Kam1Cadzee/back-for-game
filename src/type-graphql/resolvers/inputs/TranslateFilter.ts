import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TranslateWhereInput } from "../inputs/TranslateWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TranslateFilter {
  @TypeGraphQL.Field(_type => TranslateWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: TranslateWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => TranslateWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: TranslateWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => TranslateWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: TranslateWhereInput | null | undefined;
}
