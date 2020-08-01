import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SentenceUpdateWithoutEntitiesDataInput } from "../inputs/SentenceUpdateWithoutEntitiesDataInput";
import { SentenceWhereUniqueInput } from "../inputs/SentenceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SentenceUpdateWithWhereUniqueWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => SentenceWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: SentenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SentenceUpdateWithoutEntitiesDataInput, {
    nullable: false,
    description: undefined
  })
  data!: SentenceUpdateWithoutEntitiesDataInput;
}
