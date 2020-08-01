import * as TypeGraphQL from "type-graphql";
import { Entity } from "../../../models/Entity";
import { Translate } from "../../../models/Translate";
import { User } from "../../../models/User";
import { Word } from "../../../models/Word";
import { WordDisconnectEntitiesArgs } from "./args/WordDisconnectEntitiesArgs";
import { WordDisconnectTranslateArgs } from "./args/WordDisconnectTranslateArgs";
import { WordEntitiesArgs } from "./args/WordEntitiesArgs";
import { WordTranslateArgs } from "./args/WordTranslateArgs";

@TypeGraphQL.Resolver(_of => Word)
export class WordRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Translate], {
    nullable: true,
    description: undefined,
  })
  async translate(@TypeGraphQL.Root() word: Word, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: WordTranslateArgs): Promise<Translate[] | null | undefined> {
    return ctx.prisma.word.findOne({
      where: {
        id: word.id,
      },
    }).translate(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Entity], {
    nullable: true,
    description: undefined,
  })
  async entities(@TypeGraphQL.Root() word: Word, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: WordEntitiesArgs): Promise<Entity[] | null | undefined> {
    return ctx.prisma.word.findOne({
      where: {
        id: word.id,
      },
    }).entities(args);
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
    description: undefined,
  })
  async User(@TypeGraphQL.Root() word: Word, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.word.findOne({
      where: {
        id: word.id,
      },
    }).User({});
  }

  @TypeGraphQL.FieldResolver(_type => [Entity], {
    nullable: true,
    description: undefined,
  })
  async disconnectEntities(@TypeGraphQL.Root() word: Word, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: WordDisconnectEntitiesArgs): Promise<Entity[] | null | undefined> {
    return ctx.prisma.word.findOne({
      where: {
        id: word.id,
      },
    }).disconnectEntities(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Translate], {
    nullable: true,
    description: undefined,
  })
  async disconnectTranslate(@TypeGraphQL.Root() word: Word, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: WordDisconnectTranslateArgs): Promise<Translate[] | null | undefined> {
    return ctx.prisma.word.findOne({
      where: {
        id: word.id,
      },
    }).disconnectTranslate(args);
  }
}
