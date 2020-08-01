import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SentenceCreateWithoutDisconnectEntitiesInput } from "../inputs/SentenceCreateWithoutDisconnectEntitiesInput";
import { SentenceScalarWhereInput } from "../inputs/SentenceScalarWhereInput";
import { SentenceUpdateManyWithWhereNestedInput } from "../inputs/SentenceUpdateManyWithWhereNestedInput";
import { SentenceUpdateWithWhereUniqueWithoutDisconnectEntitiesInput } from "../inputs/SentenceUpdateWithWhereUniqueWithoutDisconnectEntitiesInput";
import { SentenceUpsertWithWhereUniqueWithoutDisconnectEntitiesInput } from "../inputs/SentenceUpsertWithWhereUniqueWithoutDisconnectEntitiesInput";
import { SentenceWhereUniqueInput } from "../inputs/SentenceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SentenceUpdateManyWithoutDisconnectEntitiesInput {
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

  @TypeGraphQL.Field(_type => [SentenceWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: SentenceWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: SentenceWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: SentenceWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceUpdateWithWhereUniqueWithoutDisconnectEntitiesInput], {
    nullable: true,
    description: undefined
  })
  update?: SentenceUpdateWithWhereUniqueWithoutDisconnectEntitiesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: SentenceUpdateManyWithWhereNestedInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: SentenceScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceUpsertWithWhereUniqueWithoutDisconnectEntitiesInput], {
    nullable: true,
    description: undefined
  })
  upsert?: SentenceUpsertWithWhereUniqueWithoutDisconnectEntitiesInput[] | null | undefined;
}
