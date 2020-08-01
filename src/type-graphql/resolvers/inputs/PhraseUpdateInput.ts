import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityUpdateManyWithoutDisconnectPhrasesInput } from "../inputs/EntityUpdateManyWithoutDisconnectPhrasesInput";
import { EntityUpdateManyWithoutPhrasesInput } from "../inputs/EntityUpdateManyWithoutPhrasesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PhraseUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  phrase?: string | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  ru?: string | null | undefined;

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

  @TypeGraphQL.Field(_type => EntityUpdateManyWithoutPhrasesInput, {
    nullable: true,
    description: undefined
  })
  entities?: EntityUpdateManyWithoutPhrasesInput | null | undefined;

  @TypeGraphQL.Field(_type => EntityUpdateManyWithoutDisconnectPhrasesInput, {
    nullable: true,
    description: undefined
  })
  disconnectEntities?: EntityUpdateManyWithoutDisconnectPhrasesInput | null | undefined;
}
