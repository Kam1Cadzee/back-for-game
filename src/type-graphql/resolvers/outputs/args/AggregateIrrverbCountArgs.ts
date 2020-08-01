import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { IrrverbOrderByInput } from "../../inputs/IrrverbOrderByInput";
import { IrrverbWhereInput } from "../../inputs/IrrverbWhereInput";
import { IrrverbWhereUniqueInput } from "../../inputs/IrrverbWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateIrrverbCountArgs {
  @TypeGraphQL.Field(_type => IrrverbWhereInput, { nullable: true })
  where?: IrrverbWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => IrrverbOrderByInput, { nullable: true })
  orderBy?: IrrverbOrderByInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null | undefined;

  @TypeGraphQL.Field(_type => IrrverbWhereUniqueInput, { nullable: true })
  after?: IrrverbWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => IrrverbWhereUniqueInput, { nullable: true })
  before?: IrrverbWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null | undefined;
}
