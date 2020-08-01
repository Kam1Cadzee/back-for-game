import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SettingRoleUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true,
    description: undefined
  })
  role?: keyof typeof Role | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  value?: string | null | undefined;
}
