import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SentenceCreateWithoutDisconnectEntitiesInput } from "../inputs/SentenceCreateWithoutDisconnectEntitiesInput";
import { SentenceWhereUniqueInput } from "../inputs/SentenceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SentenceCreateManyWithoutDisconnectEntitiesInput {
  @TypeGraphQL.Field(_type => [SentenceCreateWithoutDisconnectEntitiesInput], {
    nullable: true,
    description: undefined
  })
  create?: SentenceCreateWithoutDisconnectEntitiesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SentenceWhereUniqueInput[] | null | undefined;
}
