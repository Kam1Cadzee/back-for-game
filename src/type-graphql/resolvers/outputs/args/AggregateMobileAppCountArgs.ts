import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MobileAppOrderByInput } from "../../inputs/MobileAppOrderByInput";
import { MobileAppWhereInput } from "../../inputs/MobileAppWhereInput";
import { MobileAppWhereUniqueInput } from "../../inputs/MobileAppWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMobileAppCountArgs {
  @TypeGraphQL.Field(_type => MobileAppWhereInput, { nullable: true })
  where?: MobileAppWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => MobileAppOrderByInput, { nullable: true })
  orderBy?: MobileAppOrderByInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null | undefined;

  @TypeGraphQL.Field(_type => MobileAppWhereUniqueInput, { nullable: true })
  after?: MobileAppWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => MobileAppWhereUniqueInput, { nullable: true })
  before?: MobileAppWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null | undefined;
}
