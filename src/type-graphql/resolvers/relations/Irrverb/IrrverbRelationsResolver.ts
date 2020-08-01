import * as TypeGraphQL from "type-graphql";
import { Entity } from "../../../models/Entity";
import { Irrverb } from "../../../models/Irrverb";
import { IrrverbEntitiesArgs } from "./args/IrrverbEntitiesArgs";

@TypeGraphQL.Resolver(_of => Irrverb)
export class IrrverbRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Entity], {
    nullable: true,
    description: undefined,
  })
  async entities(@TypeGraphQL.Root() irrverb: Irrverb, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: IrrverbEntitiesArgs): Promise<Entity[] | null | undefined> {
    return ctx.prisma.irrverb.findOne({
      where: {
        id: irrverb.id,
      },
    }).entities(args);
  }
}
