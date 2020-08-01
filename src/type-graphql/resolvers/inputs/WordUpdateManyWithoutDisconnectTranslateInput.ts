import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordCreateWithoutDisconnectTranslateInput } from "../inputs/WordCreateWithoutDisconnectTranslateInput";
import { WordScalarWhereInput } from "../inputs/WordScalarWhereInput";
import { WordUpdateManyWithWhereNestedInput } from "../inputs/WordUpdateManyWithWhereNestedInput";
import { WordUpdateWithWhereUniqueWithoutDisconnectTranslateInput } from "../inputs/WordUpdateWithWhereUniqueWithoutDisconnectTranslateInput";
import { WordUpsertWithWhereUniqueWithoutDisconnectTranslateInput } from "../inputs/WordUpsertWithWhereUniqueWithoutDisconnectTranslateInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpdateManyWithoutDisconnectTranslateInput {
  @TypeGraphQL.Field(_type => [WordCreateWithoutDisconnectTranslateInput], {
    nullable: true,
    description: undefined
  })
  create?: WordCreateWithoutDisconnectTranslateInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [WordWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: WordWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [WordWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: WordWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [WordWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: WordWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [WordWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: WordWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [WordUpdateWithWhereUniqueWithoutDisconnectTranslateInput], {
    nullable: true,
    description: undefined
  })
  update?: WordUpdateWithWhereUniqueWithoutDisconnectTranslateInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [WordUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: WordUpdateManyWithWhereNestedInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [WordScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: WordScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [WordUpsertWithWhereUniqueWithoutDisconnectTranslateInput], {
    nullable: true,
    description: undefined
  })
  upsert?: WordUpsertWithWhereUniqueWithoutDisconnectTranslateInput[] | null | undefined;
}
