import * as TypeGraphQL from "type-graphql";
import { Entity } from "../../../models/Entity";
import { User } from "../../../models/User";
import { Word } from "../../../models/Word";
import { UserEntitiesArgs } from "./args/UserEntitiesArgs";
import { UserWordArgs } from "./args/UserWordArgs";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Entity], {
    nullable: true,
    description: undefined,
  })
  async entities(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserEntitiesArgs): Promise<Entity[] | null | undefined> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).entities(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Word], {
    nullable: true,
    description: undefined,
  })
  async Word(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserWordArgs): Promise<Word[] | null | undefined> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).Word(args);
  }
}
