import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PartOfSpeechDescOrderByInput } from "../../inputs/PartOfSpeechDescOrderByInput";
import { PartOfSpeechDescWhereInput } from "../../inputs/PartOfSpeechDescWhereInput";
import { PartOfSpeechDescWhereUniqueInput } from "../../inputs/PartOfSpeechDescWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePartOfSpeechDescCountArgs {
  @TypeGraphQL.Field(_type => PartOfSpeechDescWhereInput, { nullable: true })
  where?: PartOfSpeechDescWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => PartOfSpeechDescOrderByInput, { nullable: true })
  orderBy?: PartOfSpeechDescOrderByInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null | undefined;

  @TypeGraphQL.Field(_type => PartOfSpeechDescWhereUniqueInput, { nullable: true })
  after?: PartOfSpeechDescWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => PartOfSpeechDescWhereUniqueInput, { nullable: true })
  before?: PartOfSpeechDescWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null | undefined;
}
