import * as TypeGraphQL from "type-graphql";
import { Entity } from "../../../models/Entity";
import { Phrase } from "../../../models/Phrase";
import { PhraseDisconnectEntitiesArgs } from "./args/PhraseDisconnectEntitiesArgs";
import { PhraseEntitiesArgs } from "./args/PhraseEntitiesArgs";

@TypeGraphQL.Resolver(_of => Phrase)
export class PhraseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Entity], {
    nullable: true,
    description: undefined,
  })
  async entities(@TypeGraphQL.Root() phrase: Phrase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PhraseEntitiesArgs): Promise<Entity[] | null | undefined> {
    return ctx.prisma.phrase.findOne({
      where: {
        id: phrase.id,
      },
    }).entities(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Entity], {
    nullable: true,
    description: undefined,
  })
  async disconnectEntities(@TypeGraphQL.Root() phrase: Phrase, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PhraseDisconnectEntitiesArgs): Promise<Entity[] | null | undefined> {
    return ctx.prisma.phrase.findOne({
      where: {
        id: phrase.id,
      },
    }).disconnectEntities(args);
  }
}
