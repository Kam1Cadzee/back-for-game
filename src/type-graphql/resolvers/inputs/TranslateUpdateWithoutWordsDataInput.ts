import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordUpdateManyWithoutDisconnectTranslateInput } from "../inputs/WordUpdateManyWithoutDisconnectTranslateInput";
import { PartOfSpeech } from "../../enums/PartOfSpeech";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TranslateUpdateWithoutWordsDataInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  ru?: string | null | undefined;

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

  @TypeGraphQL.Field(_type => WordUpdateManyWithoutDisconnectTranslateInput, {
    nullable: true,
    description: undefined
  })
  disconnectWords?: WordUpdateManyWithoutDisconnectTranslateInput | null | undefined;
}
