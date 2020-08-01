import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordCreateWithoutDisconnectEntitiesInput } from "../inputs/WordCreateWithoutDisconnectEntitiesInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordCreateManyWithoutDisconnectEntitiesInput {
  @TypeGraphQL.Field(_type => [WordCreateWithoutDisconnectEntitiesInput], {
    nullable: true,
    description: undefined
  })
  create?: WordCreateWithoutDisconnectEntitiesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [WordWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: WordWhereUniqueInput[] | null | undefined;
}
