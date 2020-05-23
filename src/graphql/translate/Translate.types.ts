import {Field, ObjectType} from 'type-graphql';
import {PartOfSpeech} from '../../type-graphql/enums';
import {Irrverb} from '../../type-graphql/models';

@ObjectType()
export class TranslateWordWithParseReturn {
  @Field(returns => PartOfSpeech)
  tag: PartOfSpeech;

  @Field(returns => String)
  original: string;

  @Field(returns => [OtherWord])
  otherWords: OtherWord[];

  @Field(returns => [Translation])
  translations: Translation[];

  @Field(returns => [Expression])
  phrases: Expression[];

  @Field(returns => [Expression])
  sentences: Expression[];

  @Field(returns => [String])
  backTranslations: string[];

  @Field(returns => Irrverb, {
    nullable: true,
    defaultValue: null
  })
  irrword: Irrverb | null;
}

@ObjectType()
class OtherWord {
  @Field(returns => PartOfSpeech)
  tag: PartOfSpeech;

  @Field()
  en: string;

  @Field()
  ru: string
}

@ObjectType()
class Translation {
  @Field(returns => PartOfSpeech)
  tag: PartOfSpeech;

  @Field()
  translation: string;
}

@ObjectType()
class Expression {
  @Field()
  word: string;

  @Field()
  translation: string;
}
