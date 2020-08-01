import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityUpdateManyWithoutSentencesInput } from "../inputs/EntityUpdateManyWithoutSentencesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SentenceUpdateWithoutDisconnectEntitiesDataInput {
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
}
