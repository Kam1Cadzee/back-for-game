import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityUpdateManyWithoutDisconnectSentencesInput } from "../inputs/EntityUpdateManyWithoutDisconnectSentencesInput";
import { EntityUpdateManyWithoutSentencesInput } from "../inputs/EntityUpdateManyWithoutSentencesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SentenceUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  sentence?: string | null | undefined;

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

  @TypeGraphQL.Field(_type => EntityUpdateManyWithoutSentencesInput, {
    nullable: true,
    description: undefined
  })
  entities?: EntityUpdateManyWithoutSentencesInput | null | undefined;

  @TypeGraphQL.Field(_type => EntityUpdateManyWithoutDisconnectSentencesInput, {
    nullable: true,
    description: undefined
  })
  disconnectEntities?: EntityUpdateManyWithoutDisconnectSentencesInput | null | undefined;
}
