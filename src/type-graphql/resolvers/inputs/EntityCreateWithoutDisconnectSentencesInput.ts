import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { IrrverbCreateOneWithoutEntitiesInput } from "../inputs/IrrverbCreateOneWithoutEntitiesInput";
import { PhraseCreateManyWithoutDisconnectEntitiesInput } from "../inputs/PhraseCreateManyWithoutDisconnectEntitiesInput";
import { PhraseCreateManyWithoutEntitiesInput } from "../inputs/PhraseCreateManyWithoutEntitiesInput";
import { SentenceCreateManyWithoutEntitiesInput } from "../inputs/SentenceCreateManyWithoutEntitiesInput";
import { UserCreateOneWithoutEntitiesInput } from "../inputs/UserCreateOneWithoutEntitiesInput";
import { WordCreateManyWithoutDisconnectEntitiesInput } from "../inputs/WordCreateManyWithoutDisconnectEntitiesInput";
import { WordCreateManyWithoutEntitiesInput } from "../inputs/WordCreateManyWithoutEntitiesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityCreateWithoutDisconnectSentencesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  isNeededEdit?: boolean | null | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | null | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  isCreate?: boolean | null | undefined;

  @TypeGraphQL.Field(_type => WordCreateManyWithoutEntitiesInput, {
    nullable: true,
    description: undefined
  })
  words?: WordCreateManyWithoutEntitiesInput | null | undefined;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutEntitiesInput, {
    nullable: false,
    description: undefined
  })
  User!: UserCreateOneWithoutEntitiesInput;

  @TypeGraphQL.Field(_type => PhraseCreateManyWithoutEntitiesInput, {
    nullable: true,
    description: undefined
  })
  phrases?: PhraseCreateManyWithoutEntitiesInput | null | undefined;

  @TypeGraphQL.Field(_type => SentenceCreateManyWithoutEntitiesInput, {
    nullable: true,
    description: undefined
  })
  sentences?: SentenceCreateManyWithoutEntitiesInput | null | undefined;

  @TypeGraphQL.Field(_type => IrrverbCreateOneWithoutEntitiesInput, {
    nullable: true,
    description: undefined
  })
  irrverb?: IrrverbCreateOneWithoutEntitiesInput | null | undefined;

  @TypeGraphQL.Field(_type => WordCreateManyWithoutDisconnectEntitiesInput, {
    nullable: true,
    description: undefined
  })
  disconnectWords?: WordCreateManyWithoutDisconnectEntitiesInput | null | undefined;

  @TypeGraphQL.Field(_type => PhraseCreateManyWithoutDisconnectEntitiesInput, {
    nullable: true,
    description: undefined
  })
  disconnectPhrases?: PhraseCreateManyWithoutDisconnectEntitiesInput | null | undefined;
}
