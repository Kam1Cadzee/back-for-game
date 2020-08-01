import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordCreateManyWithoutTranslateInput } from "../inputs/WordCreateManyWithoutTranslateInput";
import { PartOfSpeech } from "../../enums/PartOfSpeech";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TranslateCreateWithoutDisconnectWordsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  ru!: string;

  @TypeGraphQL.Field(_type => PartOfSpeech, {
    nullable: true,
    description: undefined
  })
  type?: keyof typeof PartOfSpeech | null | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | null | undefined;

  @TypeGraphQL.Field(_type => WordCreateManyWithoutTranslateInput, {
    nullable: true,
    description: undefined
  })
  words?: WordCreateManyWithoutTranslateInput | null | undefined;
}
