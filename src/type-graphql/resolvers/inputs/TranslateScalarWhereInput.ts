import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PartOfSpeechFilter } from "../inputs/PartOfSpeechFilter";
import { StringFilter } from "../inputs/StringFilter";
import { WordFilter } from "../inputs/WordFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TranslateScalarWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  ru?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => PartOfSpeechFilter, {
    nullable: true,
    description: undefined
  })
  type?: PartOfSpeechFilter | null | undefined;

  @TypeGraphQL.Field(_type => WordFilter, {
    nullable: true,
    description: undefined
  })
  words?: WordFilter | null | undefined;

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

  @TypeGraphQL.Field(_type => WordFilter, {
    nullable: true,
    description: undefined
  })
  disconnectWords?: WordFilter | null | undefined;

  @TypeGraphQL.Field(_type => [TranslateScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: TranslateScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [TranslateScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: TranslateScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [TranslateScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: TranslateScalarWhereInput[] | null | undefined;
}
