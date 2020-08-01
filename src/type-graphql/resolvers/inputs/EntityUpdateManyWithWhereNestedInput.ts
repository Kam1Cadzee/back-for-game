import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityScalarWhereInput } from "../inputs/EntityScalarWhereInput";
import { EntityUpdateManyDataInput } from "../inputs/EntityUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => EntityScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: EntityScalarWhereInput;

  @TypeGraphQL.Field(_type => EntityUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: EntityUpdateManyDataInput;
}
