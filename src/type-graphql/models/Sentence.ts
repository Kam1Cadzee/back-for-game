import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Entity } from "../models/Entity";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Sentence {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  sentence!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  ru!: string;

  entities?: Entity[] | null | undefined;

  disconnectEntities?: Entity[] | null | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  updatedAt!: Date;
}
