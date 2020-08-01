import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AggregateWordCountArgs } from "./args/AggregateWordCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateWord {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregateWordCountArgs) {
    return ctx.prisma.word.count(args);
  }
}
