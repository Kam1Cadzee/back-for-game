import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutSentencesInput } from "../inputs/EntityCreateWithoutSentencesInput";
import { EntityUpdateWithoutSentencesDataInput } from "../inputs/EntityUpdateWithoutSentencesDataInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpsertWithWhereUniqueWithoutSentencesInput {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: EntityWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntityUpdateWithoutSentencesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: EntityUpdateWithoutSentencesDataInput;

  @TypeGraphQL.Field(_type => EntityCreateWithoutSentencesInput, {
    nullable: false,
    description: undefined
  })
  create!: EntityCreateWithoutSentencesInput;
}
