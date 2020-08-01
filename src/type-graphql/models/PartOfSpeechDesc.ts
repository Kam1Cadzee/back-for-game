import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PartOfSpeech } from "../enums/PartOfSpeech";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class PartOfSpeechDesc {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @TypeGraphQL.Field(_type => PartOfSpeech, {
    nullable: false,
    description: undefined,
  })
  type!: keyof typeof PartOfSpeech;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  ru!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  ua!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  en!: string;
}
