import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { IntFilter } from "../inputs/IntFilter";
import { RoleFilter } from "../inputs/RoleFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SettingRoleWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => RoleFilter, {
    nullable: true,
    description: undefined
  })
  role?: RoleFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  value?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => [SettingRoleWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: SettingRoleWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SettingRoleWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: SettingRoleWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SettingRoleWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: SettingRoleWhereInput[] | null | undefined;
}
