import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { OrderByArg } from "../../enums/OrderByArg";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PartOfSpeechDescOrderByInput {
  @TypeGraphQL.Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  id?: keyof typeof OrderByArg | null | undefined;

  @TypeGraphQL.Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  type?: keyof typeof OrderByArg | null | undefined;

  @TypeGraphQL.Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  ru?: keyof typeof OrderByArg | null | undefined;

  @TypeGraphQL.Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  ua?: keyof typeof OrderByArg | null | undefined;

  @TypeGraphQL.Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  en?: keyof typeof OrderByArg | null | undefined;
}
