import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AggregatePhraseCountArgs } from "./args/AggregatePhraseCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregatePhrase {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregatePhraseCountArgs) {
    return ctx.prisma.phrase.count(args);
  }
}
