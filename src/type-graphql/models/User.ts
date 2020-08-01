import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Entity } from "../models/Entity";
import { Word } from "../models/Word";
import { Role } from "../enums/Role";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class User {

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  email!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  lastName!: string;


  entities?: Entity[] | null | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false,
    description: undefined,
  })
  role!: keyof typeof Role;

  Word?: Word[] | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  countQuery!: number;
}
