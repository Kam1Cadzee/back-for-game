import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { IrrverbUpdateOneWithoutEntitiesInput } from "../inputs/IrrverbUpdateOneWithoutEntitiesInput";
import { PhraseUpdateManyWithoutDisconnectEntitiesInput } from "../inputs/PhraseUpdateManyWithoutDisconnectEntitiesInput";
import { SentenceUpdateManyWithoutDisconnectEntitiesInput } from "../inputs/SentenceUpdateManyWithoutDisconnectEntitiesInput";
import { SentenceUpdateManyWithoutEntitiesInput } from "../inputs/SentenceUpdateManyWithoutEntitiesInput";
import { UserUpdateOneRequiredWithoutEntitiesInput } from "../inputs/UserUpdateOneRequiredWithoutEntitiesInput";
import { WordUpdateManyWithoutDisconnectEntitiesInput } from "../inputs/WordUpdateManyWithoutDisconnectEntitiesInput";
import { WordUpdateManyWithoutEntitiesInput } from "../inputs/WordUpdateManyWithoutEntitiesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpdateWithoutPhrasesDataInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  title?: string | null | undefined;

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

  @TypeGraphQL.Field(_type => WordUpdateManyWithoutEntitiesInput, {
    nullable: true,
    description: undefined
  })
  words?: WordUpdateManyWithoutEntitiesInput | null | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutEntitiesInput, {
    nullable: true,
    description: undefined
  })
  User?: UserUpdateOneRequiredWithoutEntitiesInput | null | undefined;

  @TypeGraphQL.Field(_type => SentenceUpdateManyWithoutEntitiesInput, {
    nullable: true,
    description: undefined
  })
  sentences?: SentenceUpdateManyWithoutEntitiesInput | null | undefined;

  @TypeGraphQL.Field(_type => IrrverbUpdateOneWithoutEntitiesInput, {
    nullable: true,
    description: undefined
  })
  irrverb?: IrrverbUpdateOneWithoutEntitiesInput | null | undefined;

  @TypeGraphQL.Field(_type => WordUpdateManyWithoutDisconnectEntitiesInput, {
    nullable: true,
    description: undefined
  })
  disconnectWords?: WordUpdateManyWithoutDisconnectEntitiesInput | null | undefined;

  @TypeGraphQL.Field(_type => PhraseUpdateManyWithoutDisconnectEntitiesInput, {
    nullable: true,
    description: undefined
  })
  disconnectPhrases?: PhraseUpdateManyWithoutDisconnectEntitiesInput | null | undefined;

  @TypeGraphQL.Field(_type => SentenceUpdateManyWithoutDisconnectEntitiesInput, {
    nullable: true,
    description: undefined
  })
  disconnectSentences?: SentenceUpdateManyWithoutDisconnectEntitiesInput | null | undefined;
}
