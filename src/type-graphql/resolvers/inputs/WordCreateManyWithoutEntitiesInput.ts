import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordCreateWithoutEntitiesInput } from "../inputs/WordCreateWithoutEntitiesInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordCreateManyWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => [WordCreateWithoutEntitiesInput], {
    nullable: true,
    description: undefined
  })
  create?: WordCreateWithoutEntitiesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [WordWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: WordWhereUniqueInput[] | null | undefined;
}
