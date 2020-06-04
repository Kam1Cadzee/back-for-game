import {Ctx, Query, Resolver, Arg, Mutation, Args} from 'type-graphql';
import {Context} from '../../context';
import {TranslateService} from './Translate.service';
import {
  CreateTranslateInput,
  TranslateReturn,
  TranslateWordWithParseInput,
  TranslateWordWithParseReturn
} from './Translate.types';
import {Entity} from '../../type-graphql/models';

@Resolver()
export class TranslateResolver {
  constructor(
    private readonly service: TranslateService,
  ) {}
  @Query(returns => String)
  async translateWord(@Ctx() ctx: Context, @Arg("word") word: string) {
    return await this.service.translateWord(word);
  }

  @Query(returns => TranslateWordWithParseReturn)
  async translateWordWithParse(@Arg("word") word: string) {
    return await this.service.translateWordWithParse(word);
  }

  @Mutation(returns => Number)
  async createFullEntity(@Ctx() ctx: Context, @Arg('data') data: TranslateWordWithParseInput) {
    return await this.service.createFullEntity(data, ctx);
  }

  @Mutation(returns => TranslateReturn)
  async createOrUpdateTranslate(@Arg('data') data: CreateTranslateInput) {
    return this.service.createOrUpdateTranslate(data.idWord, data.translation);
  }

  @Query(returns => [Entity])
  async getEntitiesByWord(@Ctx() ctx: Context, @Arg('word') word: string) {
    return await this.service.getEntitiesByWord(word, ctx);
  }
}
