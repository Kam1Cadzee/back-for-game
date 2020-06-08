import {Arg, Args, ArgsType, Field, InputType, ObjectType} from 'type-graphql';
import {PartOfSpeech} from '../../type-graphql/enums';
import {Irrverb} from '../../type-graphql/models';
import {PhraseCreateInput, PhraseUpdateInput, SentenceCreateInput} from '../../type-graphql/resolvers/inputs';

@InputType()
export class TranslateWordWithParseInput {
  @Field(returns => String)
  title: string;

  @Field(returns => [OtherWordInput])
  words: OtherWordInput[];

  @Field(returns => [PhraseCreateInput])
  phrases: PhraseCreateInput[];

  @Field(returns => [SentenceCreateInput])
  sentences: SentenceCreateInput[];

  @Field({
    nullable: true
  })
  irrverbId: number | null;
}

@ObjectType()
export class TranslateWordWithParseReturn {
  @Field(returns => String)
  title: string;

  @Field(returns => [OtherWord])
  words: OtherWord[];

  @Field(returns => [PhraseCustom])
  phrases: PhraseCustom[];

  @Field(returns => [SentenceCustom])
  sentences: SentenceCustom[];

  @Field(returns => [String])
  backTranslations: string[];

  @Field(returns => Irrverb, {
    nullable: true,
    defaultValue: null
  })
  irrverb: Irrverb | null;
}

@ObjectType()
export class OtherWord {
  @Field(returns => PartOfSpeech)
  type: PartOfSpeech;

  @Field()
  en: string;

  @Field(returns => [Translation])
  translate: Translation[]
}

@InputType()
class OtherWordInput {
  @Field(returns => PartOfSpeech)
  type: PartOfSpeech;

  @Field()
  en: string;

  @Field(returns => [TranslationInput])
  translate: TranslationInput[]
}

@ObjectType()
export class Translation {
  @Field(returns => PartOfSpeech)
  type: PartOfSpeech;

  @Field()
  ru: string;
}

@InputType()
export class TranslationInput {
  @Field(returns => PartOfSpeech)
  type: PartOfSpeech;

  @Field()
  ru: string;
}


@ObjectType()
export class PhraseCustom {
  @Field()
  phrase: string;

  @Field()
  ru: string;
}

@ObjectType()
export class SentenceCustom {
  @Field()
  sentence: string;

  @Field()
  ru: string;
}


@InputType()
export class CreateTranslateInput {
  @Field()
  idWord: number;

  @Field(returns => TranslationInput)
  translation: TranslationInput
}

@ObjectType()
export class TranslateReturn {
  @Field()
  id: number;

  @Field()
  ru: string;

  @Field(returns => PartOfSpeech)
  type: PartOfSpeech;
}

@ObjectType()
export class TranslateWordReturn {
  @Field(returns => PartOfSpeech)
  type: PartOfSpeech;

  @Field(returns => [Translation])
  translate: Translation[]
}

@ArgsType()
export class CreateOrUpdateWordWithTranslateArgs {
  @Field()
  entityId: number;

  @Field(returns => PartOfSpeech)
  type: PartOfSpeech;

  @Field()
  en: string;

  @Field(returns => [String])
  translate: string[]
}
