import * as TypeGraphQL from "type-graphql";
import { Entity } from "../../../models/Entity";
import { Sentence } from "../../../models/Sentence";
import { SentenceDisconnectEntitiesArgs } from "./args/SentenceDisconnectEntitiesArgs";
import { SentenceEntitiesArgs } from "./args/SentenceEntitiesArgs";

@TypeGraphQL.Resolver(_of => Sentence)
export class SentenceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Entity], {
    nullable: true,
    description: undefined,
  })
  async entities(@TypeGraphQL.Root() sentence: Sentence, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SentenceEntitiesArgs): Promise<Entity[] | null | undefined> {
    return ctx.prisma.sentence.findOne({
      where: {
        id: sentence.id,
      },
    }).entities(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Entity], {
    nullable: true,
    description: undefined,
  })
  async disconnectEntities(@TypeGraphQL.Root() sentence: Sentence, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SentenceDisconnectEntitiesArgs): Promise<Entity[] | null | undefined> {
    return ctx.prisma.sentence.findOne({
      where: {
        id: sentence.id,
      },
    }).disconnectEntities(args);
  }
}
