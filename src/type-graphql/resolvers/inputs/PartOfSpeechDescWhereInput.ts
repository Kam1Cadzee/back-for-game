import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { IntFilter } from "../inputs/IntFilter";
import { PartOfSpeechFilter } from "../inputs/PartOfSpeechFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PartOfSpeechDescWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => PartOfSpeechFilter, {
    nullable: true,
    description: undefined
  })
  type?: PartOfSpeechFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  ru?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  ua?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  en?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => [PartOfSpeechDescWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: PartOfSpeechDescWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [PartOfSpeechDescWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: PartOfSpeechDescWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [PartOfSpeechDescWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: PartOfSpeechDescWhereInput[] | null | undefined;
}
