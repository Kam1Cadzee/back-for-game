import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AggregatePartOfSpeechDescCountArgs } from "./args/AggregatePartOfSpeechDescCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregatePartOfSpeechDesc {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregatePartOfSpeechDescCountArgs) {
    return ctx.prisma.partOfSpeechDesc.count(args);
  }
}
