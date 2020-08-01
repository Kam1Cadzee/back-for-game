import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EntityFilter } from "../inputs/EntityFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PartOfSpeechFilter } from "../inputs/PartOfSpeechFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TranslateFilter } from "../inputs/TranslateFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  en?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => TranslateFilter, {
    nullable: true,
    description: undefined
  })
  translate?: TranslateFilter | null | undefined;

  @TypeGraphQL.Field(_type => PartOfSpeechFilter, {
    nullable: true,
    description: undefined
  })
  type?: PartOfSpeechFilter | null | undefined;

  @TypeGraphQL.Field(_type => EntityFilter, {
    nullable: true,
    description: undefined
  })
  entities?: EntityFilter | null | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  userId?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => EntityFilter, {
    nullable: true,
    description: undefined
  })
  disconnectEntities?: EntityFilter | null | undefined;

  @TypeGraphQL.Field(_type => TranslateFilter, {
    nullable: true,
    description: undefined
  })
  disconnectTranslate?: TranslateFilter | null | undefined;

  @TypeGraphQL.Field(_type => [WordWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: WordWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [WordWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: WordWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [WordWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: WordWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true,
    description: undefined
  })
  User?: UserWhereInput | null | undefined;
}