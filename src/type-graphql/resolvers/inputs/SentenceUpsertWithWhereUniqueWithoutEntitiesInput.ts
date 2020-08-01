import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SentenceCreateWithoutEntitiesInput } from "../inputs/SentenceCreateWithoutEntitiesInput";
import { SentenceUpdateWithoutEntitiesDataInput } from "../inputs/SentenceUpdateWithoutEntitiesDataInput";
import { SentenceWhereUniqueInput } from "../inputs/SentenceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SentenceUpsertWithWhereUniqueWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => SentenceWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: SentenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SentenceUpdateWithoutEntitiesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: SentenceUpdateWithoutEntitiesDataInput;

  @TypeGraphQL.Field(_type => SentenceCreateWithoutEntitiesInput, {
    nullable: false,
    description: undefined
  })
  create!: SentenceCreateWithoutEntitiesInput;
}
