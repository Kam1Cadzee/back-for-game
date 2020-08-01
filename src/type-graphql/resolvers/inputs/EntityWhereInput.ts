import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { BooleanFilter } from "../inputs/BooleanFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IrrverbWhereInput } from "../inputs/IrrverbWhereInput";
import { NullableIntFilter } from "../inputs/NullableIntFilter";
import { PhraseFilter } from "../inputs/PhraseFilter";
import { SentenceFilter } from "../inputs/SentenceFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { WordFilter } from "../inputs/WordFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => WordFilter, {
    nullable: true,
    description: undefined
  })
  words?: WordFilter | null | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  userId?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => PhraseFilter, {
    nullable: true,
    description: undefined
  })
  phrases?: PhraseFilter | null | undefined;

  @TypeGraphQL.Field(_type => SentenceFilter, {
    nullable: true,
    description: undefined
  })
  sentences?: SentenceFilter | null | undefined;

  @TypeGraphQL.Field(_type => NullableIntFilter, {
    nullable: true,
    description: undefined
  })
  irrverbId?: NullableIntFilter | null | undefined;

  @TypeGraphQL.Field(_type => BooleanFilter, {
    nullable: true,
    description: undefined
  })
  isNeededEdit?: BooleanFilter | null | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  updatedAt?: DateTimeFilter | null | undefined;

  @TypeGraphQL.Field(_type => BooleanFilter, {
    nullable: true,
    description: undefined
  })
  isCreate?: BooleanFilter | null | undefined;

  @TypeGraphQL.Field(_type => WordFilter, {
    nullable: true,
    description: undefined
  })
  disconnectWords?: WordFilter | null | undefined;

  @TypeGraphQL.Field(_type => PhraseFilter, {
    nullable: true,
    description: undefined
  })
  disconnectPhrases?: PhraseFilter | null | undefined;

  @TypeGraphQL.Field(_type => SentenceFilter, {
    nullable: true,
    description: undefined
  })
  disconnectSentences?: SentenceFilter | null | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: EntityWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: EntityWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: EntityWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true,
    description: undefined
  })
  User?: UserWhereInput | null | undefined;

  @TypeGraphQL.Field(_type => IrrverbWhereInput, {
    nullable: true,
    description: undefined
  })
  irrverb?: IrrverbWhereInput | null | undefined;
}
