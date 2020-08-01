import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AggregateEntityCountArgs } from "./args/AggregateEntityCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateEntity {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateEntityCountArgs) {
    return ctx.prisma.entity.count(args);
  }
}
