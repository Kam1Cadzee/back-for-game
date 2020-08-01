import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TranslateCreateWithoutWordsInput } from "../inputs/TranslateCreateWithoutWordsInput";
import { TranslateScalarWhereInput } from "../inputs/TranslateScalarWhereInput";
import { TranslateUpdateManyWithWhereNestedInput } from "../inputs/TranslateUpdateManyWithWhereNestedInput";
import { TranslateUpdateWithWhereUniqueWithoutWordsInput } from "../inputs/TranslateUpdateWithWhereUniqueWithoutWordsInput";
import { TranslateUpsertWithWhereUniqueWithoutWordsInput } from "../inputs/TranslateUpsertWithWhereUniqueWithoutWordsInput";
import { TranslateWhereUniqueInput } from "../inputs/TranslateWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TranslateUpdateManyWithoutWordsInput {
  @TypeGraphQL.Field(_type => [TranslateCreateWithoutWordsInput], {
    nullable: true,
    description: undefined
  })
  create?: TranslateCreateWithoutWordsInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [TranslateWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: TranslateWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [TranslateWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: TranslateWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [TranslateWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: TranslateWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [TranslateWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: TranslateWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [TranslateUpdateWithWhereUniqueWithoutWordsInput], {
    nullable: true,
    description: undefined
  })
  update?: TranslateUpdateWithWhereUniqueWithoutWordsInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [TranslateUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: TranslateUpdateManyWithWhereNestedInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [TranslateScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: TranslateScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [TranslateUpsertWithWhereUniqueWithoutWordsInput], {
    nullable: true,
    description: undefined
  })
  upsert?: TranslateUpsertWithWhereUniqueWithoutWordsInput[] | null | undefined;
}
