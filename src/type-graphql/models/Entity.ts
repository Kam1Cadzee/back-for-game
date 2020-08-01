import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Irrverb } from "../models/Irrverb";
import { Phrase } from "../models/Phrase";
import { Sentence } from "../models/Sentence";
import { User } from "../models/User";
import { Word } from "../models/Word";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class Entity {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  title!: string;

  words?: Word[] | null | undefined;

  User?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  userId!: number;

  phrases?: Phrase[] | null | undefined;

  sentences?: Sentence[] | null | undefined;

  irrverb?: Irrverb | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined,
  })
  irrverbId?: number | null | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false,
    description: undefined,
  })
  isNeededEdit!: boolean;

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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false,
    description: undefined,
  })
  isCreate!: boolean;

  disconnectWords?: Word[] | null | undefined;

  disconnectPhrases?: Phrase[] | null | undefined;

  disconnectSentences?: Sentence[] | null | undefined;
}
