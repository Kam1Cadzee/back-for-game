import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityUpdateManyWithoutIrrverbInput } from "../inputs/EntityUpdateManyWithoutIrrverbInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class IrrverbUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  form1EN?: string | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  form2EN?: string | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  form3EN?: string | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  ru?: string | null | undefined;

  @TypeGraphQL.Field(_type => EntityUpdateManyWithoutIrrverbInput, {
    nullable: true,
    description: undefined
  })
  entities?: EntityUpdateManyWithoutIrrverbInput | null | undefined;
}
