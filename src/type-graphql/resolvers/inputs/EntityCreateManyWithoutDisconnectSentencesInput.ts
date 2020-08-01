import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutDisconnectSentencesInput } from "../inputs/EntityCreateWithoutDisconnectSentencesInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityCreateManyWithoutDisconnectSentencesInput {
  @TypeGraphQL.Field(_type => [EntityCreateWithoutDisconnectSentencesInput], {
    nullable: true,
    description: undefined
  })
  create?: EntityCreateWithoutDisconnectSentencesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: EntityWhereUniqueInput[] | null | undefined;
}
