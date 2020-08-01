import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Word } from "../models/Word";
import { PartOfSpeech } from "../enums/PartOfSpeech";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Translate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  ru!: string;

  @TypeGraphQL.Field(_type => PartOfSpeech, {
    nullable: false,
    description: undefined,
  })
  type!: keyof typeof PartOfSpeech;

  words?: Word[] | null | undefined;

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

  disconnectWords?: Word[] | null | undefined;
}
