import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityWhereInput } from "../inputs/EntityWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityFilter {
  @TypeGraphQL.Field(_type => EntityWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: EntityWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => EntityWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: EntityWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => EntityWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: EntityWhereInput | null | undefined;
}
