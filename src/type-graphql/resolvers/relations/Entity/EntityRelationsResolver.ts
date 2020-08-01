import * as TypeGraphQL from "type-graphql";
import { Entity } from "../../../models/Entity";
import { Irrverb } from "../../../models/Irrverb";
import { Phrase } from "../../../models/Phrase";
import { Sentence } from "../../../models/Sentence";
import { User } from "../../../models/User";
import { Word } from "../../../models/Word";
import { EntityDisconnectPhrasesArgs } from "./args/EntityDisconnectPhrasesArgs";
import { EntityDisconnectSentencesArgs } from "./args/EntityDisconnectSentencesArgs";
import { EntityDisconnectWordsArgs } from "./args/EntityDisconnectWordsArgs";
import { EntityPhrasesArgs } from "./args/EntityPhrasesArgs";
import { EntitySentencesArgs } from "./args/EntitySentencesArgs";
import { EntityWordsArgs } from "./args/EntityWordsArgs";

@TypeGraphQL.Resolver(_of => Entity)
export class EntityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Word], {
    nullable: true,
    description: undefined,
  })
  async words(@TypeGraphQL.Root() entity: Entity, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: EntityWordsArgs): Promise<Word[] | null | undefined> {
    return ctx.prisma.entity.findOne({
      where: {
        id: entity.id,
      },
    }).words(args);
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
    description: undefined,
  })
  async User(@TypeGraphQL.Root() entity: Entity, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.entity.findOne({
      where: {
        id: entity.id,
      },
    }).User({});
  }

  @TypeGraphQL.FieldResolver(_type => [Phrase], {
    nullable: true,
    description: undefined,
  })
  async phrases(@TypeGraphQL.Root() entity: Entity, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: EntityPhrasesArgs): Promise<Phrase[] | null | undefined> {
    return ctx.prisma.entity.findOne({
      where: {
        id: entity.id,
      },
    }).phrases(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Sentence], {
    nullable: true,
    description: undefined,
  })
  async sentences(@TypeGraphQL.Root() entity: Entity, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: EntitySentencesArgs): Promise<Sentence[] | null | undefined> {
    return ctx.prisma.entity.findOne({
      where: {
        id: entity.id,
      },
    }).sentences(args);
  }

  @TypeGraphQL.FieldResolver(_type => Irrverb, {
    nullable: true,
    description: undefined,
  })
  async irrverb(@TypeGraphQL.Root() entity: Entity, @TypeGraphQL.Ctx() ctx: any): Promise<Irrverb | null | undefined> {
    return ctx.prisma.entity.findOne({
      where: {
        id: entity.id,
      },
    }).irrverb({});
  }

  @TypeGraphQL.FieldResolver(_type => [Word], {
    nullable: true,
    description: undefined,
  })
  async disconnectWords(@TypeGraphQL.Root() entity: Entity, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: EntityDisconnectWordsArgs): Promise<Word[] | null | undefined> {
    return ctx.prisma.entity.findOne({
      where: {
        id: entity.id,
      },
    }).disconnectWords(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Phrase], {
    nullable: true,
    description: undefined,
  })
  async disconnectPhrases(@TypeGraphQL.Root() entity: Entity, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: EntityDisconnectPhrasesArgs): Promise<Phrase[] | null | undefined> {
    return ctx.prisma.entity.findOne({
      where: {
        id: entity.id,
      },
    }).disconnectPhrases(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Sentence], {
    nullable: true,
    description: undefined,
  })
  async disconnectSentences(@TypeGraphQL.Root() entity: Entity, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: EntityDisconnectSentencesArgs): Promise<Sentence[] | null | undefined> {
    return ctx.prisma.entity.findOne({
      where: {
        id: entity.id,
      },
    }).disconnectSentences(args);
  }
}
