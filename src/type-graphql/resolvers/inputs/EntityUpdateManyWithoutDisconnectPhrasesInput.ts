import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutDisconnectPhrasesInput } from "../inputs/EntityCreateWithoutDisconnectPhrasesInput";
import { EntityScalarWhereInput } from "../inputs/EntityScalarWhereInput";
import { EntityUpdateManyWithWhereNestedInput } from "../inputs/EntityUpdateManyWithWhereNestedInput";
import { EntityUpdateWithWhereUniqueWithoutDisconnectPhrasesInput } from "../inputs/EntityUpdateWithWhereUniqueWithoutDisconnectPhrasesInput";
import { EntityUpsertWithWhereUniqueWithoutDisconnectPhrasesInput } from "../inputs/EntityUpsertWithWhereUniqueWithoutDisconnectPhrasesInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpdateManyWithoutDisconnectPhrasesInput {
  @TypeGraphQL.Field(_type => [EntityCreateWithoutDisconnectPhrasesInput], {
    nullable: true,
    description: undefined
  })
  create?: EntityCreateWithoutDisconnectPhrasesInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [EntityUpdateWithWhereUniqueWithoutDisconnectPhrasesInput], {
    nullable: true,
    description: undefined
  })
  update?: EntityUpdateWithWhereUniqueWithoutDisconnectPhrasesInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [EntityUpsertWithWhereUniqueWithoutDisconnectPhrasesInput], {
    nullable: true,
    description: undefined
  })
  upsert?: EntityUpsertWithWhereUniqueWithoutDisconnectPhrasesInput[] | null | undefined;
}
