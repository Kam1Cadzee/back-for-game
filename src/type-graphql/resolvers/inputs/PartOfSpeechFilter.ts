import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PartOfSpeech } from "../../enums/PartOfSpeech";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PartOfSpeechFilter {
  @TypeGraphQL.Field(_type => PartOfSpeech, {
    nullable: true,
    description: undefined
  })
  equals?: keyof typeof PartOfSpeech | null | undefined;

  @TypeGraphQL.Field(_type => PartOfSpeech, {
    nullable: true,
    description: undefined
  })
  not?: keyof typeof PartOfSpeech | null | undefined;

  @TypeGraphQL.Field(_type => [PartOfSpeech], {
    nullable: true,
    description: undefined
  })
  in?: Array<keyof typeof PartOfSpeech> | null | undefined;

  @TypeGraphQL.Field(_type => [PartOfSpeech], {
    nullable: true,
    description: undefined
  })
  notIn?: Array<keyof typeof PartOfSpeech> | null | undefined;
}
