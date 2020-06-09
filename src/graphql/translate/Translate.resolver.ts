import {Arg, Args, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {Context} from '../../context';
import {TranslateService} from './Translate.service';
import {
  CreateOrUpdateWordWithTranslateArgs,
  CreateTranslateInput,
  TranslateReturn,
  TranslateWordReturn,
  TranslateWordWithParseInput,
  TranslateWordWithParseReturn,
} from './Translate.types';
import {Entity, Word} from '../../type-graphql/models';
import {PartOfSpeech} from '../../type-graphql/enums';

@Resolver()
export class TranslateResolver {
  constructor(
    private readonly service: TranslateService,
  ) {
  }

  @Query(returns => TranslateWordReturn)
  async translateWord(@Ctx() ctx: Context, @Arg('word') word: string) {
    return await this.service.translateWord(word, ctx.userId);
  }

  @Query(returns => TranslateWordWithParseReturn)
  async translateWordWithParse(@Arg('word') word: string) {
    return await this.service.translateWordWithParse(word);
  }

  @Mutation(returns => Boolean)
  async updateAllEntity(@Ctx() ctx: Context, @Arg('data') data: TranslateWordWithParseInput) {
    return await this.service.updateAllEntity(data);
  }

  @Mutation(returns => TranslateReturn)
  async createOrUpdateTranslate(@Arg('data') data: CreateTranslateInput) {
    return this.service.createOrUpdateTranslate(data.idWord, data.translation);
  }

  @Query(returns => [Entity])
  async getEntitiesByWord(@Ctx() ctx: Context, @Arg('word') word: string) {
    return await this.service.getEntitiesByWord(word, ctx);
  }

  @Mutation(returns => Word)
  async createOrUpdateWordWithTranslate(@Ctx() ctx: Context,
                                       @Args(returns => CreateOrUpdateWordWithTranslateArgs) data: CreateOrUpdateWordWithTranslateArgs,
  ) {
    console.log(data)
    return this.service.createOrUpdateWordWithTranslate(data.entityId, data.type, data.en, ctx.userId, data.translate);
  }
}
