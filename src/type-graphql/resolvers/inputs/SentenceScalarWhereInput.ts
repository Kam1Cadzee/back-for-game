import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EntityFilter } from "../inputs/EntityFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SentenceScalarWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  sentence?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  ru?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => EntityFilter, {
    nullable: true,
    description: undefined
  })
  entities?: EntityFilter | null | undefined;

  @TypeGraphQL.Field(_type => EntityFilter, {
    nullable: true,
    description: undefined
  })
  disconnectEntities?: EntityFilter | null | undefined;

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

  @TypeGraphQL.Field(_type => [SentenceScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: SentenceScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: SentenceScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: SentenceScalarWhereInput[] | null | undefined;
}
