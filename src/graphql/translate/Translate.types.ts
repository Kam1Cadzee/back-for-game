import {Field, ObjectType} from 'type-graphql';
import {PartOfSpeech} from '../../type-graphql/enums';
import {Irrverb} from '../../type-graphql/models';

@ObjectType()
export class TranslateWordWithParseReturn {
  @Field(returns => [String])
  translations: string[];

  @Field(returns => PartOfSpeech)
  tag: PartOfSpeech;

  @Field(returns => [OtherWord])
  otherWords: OtherWord[];

  @Field(returns => [Expression])
  expressions: Expression[];

  @Field(returns => Irrverb, {
    nullable: true,
    defaultValue: null
  })
  irrword: Irrverb | null;
}

@ObjectType()
class OtherWord {
  @Field()
  normalizedTarget: string;

  @Field(returns => PartOfSpeech)
  posTag: PartOfSpeech;

  @Field()
  confidence: number;

  @Field(returns => [String])
  backTranslations: string[]
}

@ObjectType()
class Expression {
  @Field()
  word: string;

  @Field()
  translation: string;
}
