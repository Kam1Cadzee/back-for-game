import * as TypeGraphQL from "type-graphql";
import { Translate } from "../../../models/Translate";
import { Word } from "../../../models/Word";
import { TranslateDisconnectWordsArgs } from "./args/TranslateDisconnectWordsArgs";
import { TranslateWordsArgs } from "./args/TranslateWordsArgs";

@TypeGraphQL.Resolver(_of => Translate)
export class TranslateRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Word], {
    nullable: true,
    description: undefined,
  })
  async words(@TypeGraphQL.Root() translate: Translate, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TranslateWordsArgs): Promise<Word[] | null | undefined> {
    return ctx.prisma.translate.findOne({
      where: {
        id: translate.id,
      },
    }).words(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Word], {
    nullable: true,
    description: undefined,
  })
  async disconnectWords(@TypeGraphQL.Root() translate: Translate, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TranslateDisconnectWordsArgs): Promise<Word[] | null | undefined> {
    return ctx.prisma.translate.findOne({
      where: {
        id: translate.id,
      },
    }).disconnectWords(args);
  }
}
