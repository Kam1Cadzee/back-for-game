import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AggregateIrrverbCountArgs } from "./args/AggregateIrrverbCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateIrrverb {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateIrrverbCountArgs) {
    return ctx.prisma.irrverb.count(args);
  }
}
