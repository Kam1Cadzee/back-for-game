import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Role } from "../enums/Role";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class SettingRole {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false,
    description: undefined,
  })
  role!: keyof typeof Role;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  value!: string;
}
