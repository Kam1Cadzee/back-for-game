import {Field, InputType, ObjectType} from 'type-graphql';
import {PartOfSpeech} from '../../type-graphql/enums';
import {Irrverb} from '../../type-graphql/models';

/*@InputType()
export class TranslateWordWithParseInput {
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

  @Field({
    nullable: true
  })
  irrwordId: number | null;
}*/

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

  @Field(returns => [Translation])
  ru: Translation[]
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
