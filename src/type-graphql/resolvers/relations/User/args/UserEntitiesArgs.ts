import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityOrderByInput } from "../../../inputs/EntityOrderByInput";
import { EntityWhereInput } from "../../../inputs/EntityWhereInput";
import { EntityWhereUniqueInput } from "../../../inputs/EntityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UserEntitiesArgs {
  @TypeGraphQL.Field(_type => EntityWhereInput, { nullable: true })
  where?: EntityWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => EntityOrderByInput, { nullable: true })
  orderBy?: EntityOrderByInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null | undefined;

  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, { nullable: true })
  after?: EntityWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, { nullable: true })
  before?: EntityWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null | undefined;
}
