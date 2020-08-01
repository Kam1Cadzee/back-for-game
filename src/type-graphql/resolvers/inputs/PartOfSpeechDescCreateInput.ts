import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PartOfSpeech } from "../../enums/PartOfSpeech";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PartOfSpeechDescCreateInput {
  @TypeGraphQL.Field(_type => PartOfSpeech, {
    nullable: false,
    description: undefined
  })
  type!: keyof typeof PartOfSpeech;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  ru!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  ua!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  en!: string;
}
