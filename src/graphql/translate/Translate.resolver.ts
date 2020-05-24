import {Ctx, Query, Resolver, Arg, Mutation} from 'type-graphql';
import {Context} from '../../context';
import {TranslateService} from './Translate.service';
import {TranslateWordWithParseReturn} from './Translate.types';

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

 /* @Mutation(returns => String)
  createFullEntity(@Arg('data') data: TranslateWordWithParseInput) {
    return 'ok'
  }*/
}
