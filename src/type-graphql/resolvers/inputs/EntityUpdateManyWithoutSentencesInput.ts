import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutSentencesInput } from "../inputs/EntityCreateWithoutSentencesInput";
import { EntityScalarWhereInput } from "../inputs/EntityScalarWhereInput";
import { EntityUpdateManyWithWhereNestedInput } from "../inputs/EntityUpdateManyWithWhereNestedInput";
import { EntityUpdateWithWhereUniqueWithoutSentencesInput } from "../inputs/EntityUpdateWithWhereUniqueWithoutSentencesInput";
import { EntityUpsertWithWhereUniqueWithoutSentencesInput } from "../inputs/EntityUpsertWithWhereUniqueWithoutSentencesInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpdateManyWithoutSentencesInput {
  @TypeGraphQL.Field(_type => [EntityCreateWithoutSentencesInput], {
    nullable: true,
    description: undefined
  })
  create?: EntityCreateWithoutSentencesInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [EntityUpdateWithWhereUniqueWithoutSentencesInput], {
    nullable: true,
    description: undefined
  })
  update?: EntityUpdateWithWhereUniqueWithoutSentencesInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [EntityUpsertWithWhereUniqueWithoutSentencesInput], {
    nullable: true,
    description: undefined
  })
  upsert?: EntityUpsertWithWhereUniqueWithoutSentencesInput[] | null | undefined;
}
