import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TranslateOrderByInput } from "../../../inputs/TranslateOrderByInput";
import { TranslateWhereInput } from "../../../inputs/TranslateWhereInput";
import { TranslateWhereUniqueInput } from "../../../inputs/TranslateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class WordDisconnectTranslateArgs {
  @TypeGraphQL.Field(_type => TranslateWhereInput, { nullable: true })
  where?: TranslateWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => TranslateOrderByInput, { nullable: true })
  orderBy?: TranslateOrderByInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null | undefined;

  @TypeGraphQL.Field(_type => TranslateWhereUniqueInput, { nullable: true })
  after?: TranslateWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => TranslateWhereUniqueInput, { nullable: true })
  before?: TranslateWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null | undefined;
}
