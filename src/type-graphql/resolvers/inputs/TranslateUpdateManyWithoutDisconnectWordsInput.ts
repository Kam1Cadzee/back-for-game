import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TranslateCreateWithoutDisconnectWordsInput } from "../inputs/TranslateCreateWithoutDisconnectWordsInput";
import { TranslateScalarWhereInput } from "../inputs/TranslateScalarWhereInput";
import { TranslateUpdateManyWithWhereNestedInput } from "../inputs/TranslateUpdateManyWithWhereNestedInput";
import { TranslateUpdateWithWhereUniqueWithoutDisconnectWordsInput } from "../inputs/TranslateUpdateWithWhereUniqueWithoutDisconnectWordsInput";
import { TranslateUpsertWithWhereUniqueWithoutDisconnectWordsInput } from "../inputs/TranslateUpsertWithWhereUniqueWithoutDisconnectWordsInput";
import { TranslateWhereUniqueInput } from "../inputs/TranslateWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TranslateUpdateManyWithoutDisconnectWordsInput {
  @TypeGraphQL.Field(_type => [TranslateCreateWithoutDisconnectWordsInput], {
    nullable: true,
    description: undefined
  })
  create?: TranslateCreateWithoutDisconnectWordsInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [TranslateUpdateWithWhereUniqueWithoutDisconnectWordsInput], {
    nullable: true,
    description: undefined
  })
  update?: TranslateUpdateWithWhereUniqueWithoutDisconnectWordsInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [TranslateUpsertWithWhereUniqueWithoutDisconnectWordsInput], {
    nullable: true,
    description: undefined
  })
  upsert?: TranslateUpsertWithWhereUniqueWithoutDisconnectWordsInput[] | null | undefined;
}
