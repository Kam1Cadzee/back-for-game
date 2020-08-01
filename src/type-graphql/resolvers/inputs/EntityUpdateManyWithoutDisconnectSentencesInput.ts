import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutDisconnectSentencesInput } from "../inputs/EntityCreateWithoutDisconnectSentencesInput";
import { EntityScalarWhereInput } from "../inputs/EntityScalarWhereInput";
import { EntityUpdateManyWithWhereNestedInput } from "../inputs/EntityUpdateManyWithWhereNestedInput";
import { EntityUpdateWithWhereUniqueWithoutDisconnectSentencesInput } from "../inputs/EntityUpdateWithWhereUniqueWithoutDisconnectSentencesInput";
import { EntityUpsertWithWhereUniqueWithoutDisconnectSentencesInput } from "../inputs/EntityUpsertWithWhereUniqueWithoutDisconnectSentencesInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpdateManyWithoutDisconnectSentencesInput {
  @TypeGraphQL.Field(_type => [EntityCreateWithoutDisconnectSentencesInput], {
    nullable: true,
    description: undefined
  })
  create?: EntityCreateWithoutDisconnectSentencesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: EntityWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: EntityWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: EntityWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: EntityWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityUpdateWithWhereUniqueWithoutDisconnectSentencesInput], {
    nullable: true,
    description: undefined
  })
  update?: EntityUpdateWithWhereUniqueWithoutDisconnectSentencesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: EntityUpdateManyWithWhereNestedInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: EntityScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [EntityUpsertWithWhereUniqueWithoutDisconnectSentencesInput], {
    nullable: true,
    description: undefined
  })
  upsert?: EntityUpsertWithWhereUniqueWithoutDisconnectSentencesInput[] | null | undefined;
}
