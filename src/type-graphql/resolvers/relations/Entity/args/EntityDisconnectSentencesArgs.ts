import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SentenceOrderByInput } from "../../../inputs/SentenceOrderByInput";
import { SentenceWhereInput } from "../../../inputs/SentenceWhereInput";
import { SentenceWhereUniqueInput } from "../../../inputs/SentenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class EntityDisconnectSentencesArgs {
  @TypeGraphQL.Field(_type => SentenceWhereInput, { nullable: true })
  where?: SentenceWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => SentenceOrderByInput, { nullable: true })
  orderBy?: SentenceOrderByInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null | undefined;

  @TypeGraphQL.Field(_type => SentenceWhereUniqueInput, { nullable: true })
  after?: SentenceWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => SentenceWhereUniqueInput, { nullable: true })
  before?: SentenceWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null | undefined;
}
