import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateManyWithoutDisconnectWordsInput } from "../inputs/EntityCreateManyWithoutDisconnectWordsInput";
import { TranslateCreateManyWithoutDisconnectWordsInput } from "../inputs/TranslateCreateManyWithoutDisconnectWordsInput";
import { TranslateCreateManyWithoutWordsInput } from "../inputs/TranslateCreateManyWithoutWordsInput";
import { UserCreateOneWithoutWordInput } from "../inputs/UserCreateOneWithoutWordInput";
import { PartOfSpeech } from "../../enums/PartOfSpeech";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordCreateWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  en!: string;

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

  @TypeGraphQL.Field(_type => TranslateCreateManyWithoutWordsInput, {
    nullable: true,
    description: undefined
  })
  translate?: TranslateCreateManyWithoutWordsInput | null | undefined;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutWordInput, {
    nullable: false,
    description: undefined
  })
  User!: UserCreateOneWithoutWordInput;

  @TypeGraphQL.Field(_type => EntityCreateManyWithoutDisconnectWordsInput, {
    nullable: true,
    description: undefined
  })
  disconnectEntities?: EntityCreateManyWithoutDisconnectWordsInput | null | undefined;

  @TypeGraphQL.Field(_type => TranslateCreateManyWithoutDisconnectWordsInput, {
    nullable: true,
    description: undefined
  })
  disconnectTranslate?: TranslateCreateManyWithoutDisconnectWordsInput | null | undefined;
}
