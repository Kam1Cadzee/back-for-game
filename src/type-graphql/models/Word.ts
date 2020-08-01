import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Entity } from "../models/Entity";
import { Translate } from "../models/Translate";
import { User } from "../models/User";
import { PartOfSpeech } from "../enums/PartOfSpeech";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Word {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  en!: string;

  translate?: Translate[] | null | undefined;

  @TypeGraphQL.Field(_type => PartOfSpeech, {
    nullable: false,
    description: undefined,
  })
  type!: keyof typeof PartOfSpeech;

  entities?: Entity[] | null | undefined;

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

  User?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  userId!: number;

  disconnectEntities?: Entity[] | null | undefined;

  disconnectTranslate?: Translate[] | null | undefined;
}
