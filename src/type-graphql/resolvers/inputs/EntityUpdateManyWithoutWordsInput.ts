import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutWordsInput } from "../inputs/EntityCreateWithoutWordsInput";
import { EntityScalarWhereInput } from "../inputs/EntityScalarWhereInput";
import { EntityUpdateManyWithWhereNestedInput } from "../inputs/EntityUpdateManyWithWhereNestedInput";
import { EntityUpdateWithWhereUniqueWithoutWordsInput } from "../inputs/EntityUpdateWithWhereUniqueWithoutWordsInput";
import { EntityUpsertWithWhereUniqueWithoutWordsInput } from "../inputs/EntityUpsertWithWhereUniqueWithoutWordsInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpdateManyWithoutWordsInput {
  @TypeGraphQL.Field(_type => [EntityCreateWithoutWordsInput], {
    nullable: true,
    description: undefined
  })
  create?: EntityCreateWithoutWordsInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [EntityUpdateWithWhereUniqueWithoutWordsInput], {
    nullable: true,
    description: undefined
  })
  update?: EntityUpdateWithWhereUniqueWithoutWordsInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [EntityUpsertWithWhereUniqueWithoutWordsInput], {
    nullable: true,
    description: undefined
  })
  upsert?: EntityUpsertWithWhereUniqueWithoutWordsInput[] | null | undefined;
}
