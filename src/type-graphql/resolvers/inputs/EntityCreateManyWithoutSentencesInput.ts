import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutSentencesInput } from "../inputs/EntityCreateWithoutSentencesInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityCreateManyWithoutSentencesInput {
  @TypeGraphQL.Field(_type => [EntityCreateWithoutSentencesInput], {
    nullable: true,
    description: undefined
  })
  create?: EntityCreateWithoutSentencesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: EntityWhereUniqueInput[] | null | undefined;
}
