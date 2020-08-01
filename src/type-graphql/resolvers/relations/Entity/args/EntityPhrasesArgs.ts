import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PhraseOrderByInput } from "../../../inputs/PhraseOrderByInput";
import { PhraseWhereInput } from "../../../inputs/PhraseWhereInput";
import { PhraseWhereUniqueInput } from "../../../inputs/PhraseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class EntityPhrasesArgs {
  @TypeGraphQL.Field(_type => PhraseWhereInput, { nullable: true })
  where?: PhraseWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => PhraseOrderByInput, { nullable: true })
  orderBy?: PhraseOrderByInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null | undefined;

  @TypeGraphQL.Field(_type => PhraseWhereUniqueInput, { nullable: true })
  after?: PhraseWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => PhraseWhereUniqueInput, { nullable: true })
  before?: PhraseWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null | undefined;
}
