import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SentenceCreateWithoutEntitiesInput } from "../inputs/SentenceCreateWithoutEntitiesInput";
import { SentenceWhereUniqueInput } from "../inputs/SentenceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SentenceCreateManyWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => [SentenceCreateWithoutEntitiesInput], {
    nullable: true,
    description: undefined
  })
  create?: SentenceCreateWithoutEntitiesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SentenceWhereUniqueInput[] | null | undefined;
}
