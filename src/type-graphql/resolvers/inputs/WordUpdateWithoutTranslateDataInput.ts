import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityUpdateManyWithoutDisconnectWordsInput } from "../inputs/EntityUpdateManyWithoutDisconnectWordsInput";
import { EntityUpdateManyWithoutWordsInput } from "../inputs/EntityUpdateManyWithoutWordsInput";
import { TranslateUpdateManyWithoutDisconnectWordsInput } from "../inputs/TranslateUpdateManyWithoutDisconnectWordsInput";
import { UserUpdateOneRequiredWithoutWordInput } from "../inputs/UserUpdateOneRequiredWithoutWordInput";
import { PartOfSpeech } from "../../enums/PartOfSpeech";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpdateWithoutTranslateDataInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  en?: string | null | undefined;

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

  @TypeGraphQL.Field(_type => EntityUpdateManyWithoutWordsInput, {
    nullable: true,
    description: undefined
  })
  entities?: EntityUpdateManyWithoutWordsInput | null | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutWordInput, {
    nullable: true,
    description: undefined
  })
  User?: UserUpdateOneRequiredWithoutWordInput | null | undefined;

  @TypeGraphQL.Field(_type => EntityUpdateManyWithoutDisconnectWordsInput, {
    nullable: true,
    description: undefined
  })
  disconnectEntities?: EntityUpdateManyWithoutDisconnectWordsInput | null | undefined;

  @TypeGraphQL.Field(_type => TranslateUpdateManyWithoutDisconnectWordsInput, {
    nullable: true,
    description: undefined
  })
  disconnectTranslate?: TranslateUpdateManyWithoutDisconnectWordsInput | null | undefined;
}
