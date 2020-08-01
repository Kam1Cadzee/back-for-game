import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SentenceCreateWithoutDisconnectEntitiesInput } from "../inputs/SentenceCreateWithoutDisconnectEntitiesInput";
import { SentenceUpdateWithoutDisconnectEntitiesDataInput } from "../inputs/SentenceUpdateWithoutDisconnectEntitiesDataInput";
import { SentenceWhereUniqueInput } from "../inputs/SentenceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SentenceUpsertWithWhereUniqueWithoutDisconnectEntitiesInput {
  @TypeGraphQL.Field(_type => SentenceWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: SentenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SentenceUpdateWithoutDisconnectEntitiesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: SentenceUpdateWithoutDisconnectEntitiesDataInput;

  @TypeGraphQL.Field(_type => SentenceCreateWithoutDisconnectEntitiesInput, {
    nullable: false,
    description: undefined
  })
  create!: SentenceCreateWithoutDisconnectEntitiesInput;
}
