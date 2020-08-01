import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateManyWithoutSentencesInput } from "../inputs/EntityCreateManyWithoutSentencesInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SentenceCreateWithoutDisconnectEntitiesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  sentence!: string;

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

  @TypeGraphQL.Field(_type => EntityCreateManyWithoutSentencesInput, {
    nullable: true,
    description: undefined
  })
  entities?: EntityCreateManyWithoutSentencesInput | null | undefined;
}
