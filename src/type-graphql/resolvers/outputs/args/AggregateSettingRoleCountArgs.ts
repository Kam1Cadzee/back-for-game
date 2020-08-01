import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SettingRoleOrderByInput } from "../../inputs/SettingRoleOrderByInput";
import { SettingRoleWhereInput } from "../../inputs/SettingRoleWhereInput";
import { SettingRoleWhereUniqueInput } from "../../inputs/SettingRoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSettingRoleCountArgs {
  @TypeGraphQL.Field(_type => SettingRoleWhereInput, { nullable: true })
  where?: SettingRoleWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => SettingRoleOrderByInput, { nullable: true })
  orderBy?: SettingRoleOrderByInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null | undefined;

  @TypeGraphQL.Field(_type => SettingRoleWhereUniqueInput, { nullable: true })
  after?: SettingRoleWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => SettingRoleWhereUniqueInput, { nullable: true })
  before?: SettingRoleWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null | undefined;
}
