import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordOrderByInput } from "../../../inputs/WordOrderByInput";
import { WordWhereInput } from "../../../inputs/WordWhereInput";
import { WordWhereUniqueInput } from "../../../inputs/WordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class EntityWordsArgs {
  @TypeGraphQL.Field(_type => WordWhereInput, { nullable: true })
  where?: WordWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => WordOrderByInput, { nullable: true })
  orderBy?: WordOrderByInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null | undefined;

  @TypeGraphQL.Field(_type => WordWhereUniqueInput, { nullable: true })
  after?: WordWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => WordWhereUniqueInput, { nullable: true })
  before?: WordWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null | undefined;
}
