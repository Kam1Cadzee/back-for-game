import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateManyWithoutDisconnectPhrasesInput } from "../inputs/EntityCreateManyWithoutDisconnectPhrasesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PhraseCreateWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  phrase!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  ru!: string;

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

  @TypeGraphQL.Field(_type => EntityCreateManyWithoutDisconnectPhrasesInput, {
    nullable: true,
    description: undefined
  })
  disconnectEntities?: EntityCreateManyWithoutDisconnectPhrasesInput | null | undefined;
}
