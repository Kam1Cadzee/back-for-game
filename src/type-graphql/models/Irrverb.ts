import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Entity } from "../models/Entity";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Irrverb {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  form1EN!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  form2EN!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  form3EN!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  ru!: string;

  entities?: Entity[] | null | undefined;
}
