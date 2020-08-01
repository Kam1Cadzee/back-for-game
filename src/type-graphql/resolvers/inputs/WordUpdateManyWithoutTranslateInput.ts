import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordCreateWithoutTranslateInput } from "../inputs/WordCreateWithoutTranslateInput";
import { WordScalarWhereInput } from "../inputs/WordScalarWhereInput";
import { WordUpdateManyWithWhereNestedInput } from "../inputs/WordUpdateManyWithWhereNestedInput";
import { WordUpdateWithWhereUniqueWithoutTranslateInput } from "../inputs/WordUpdateWithWhereUniqueWithoutTranslateInput";
import { WordUpsertWithWhereUniqueWithoutTranslateInput } from "../inputs/WordUpsertWithWhereUniqueWithoutTranslateInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpdateManyWithoutTranslateInput {
  @TypeGraphQL.Field(_type => [WordCreateWithoutTranslateInput], {
    nullable: true,
    description: undefined
  })
  create?: WordCreateWithoutTranslateInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [WordUpdateWithWhereUniqueWithoutTranslateInput], {
    nullable: true,
    description: undefined
  })
  update?: WordUpdateWithWhereUniqueWithoutTranslateInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [WordUpsertWithWhereUniqueWithoutTranslateInput], {
    nullable: true,
    description: undefined
  })
  upsert?: WordUpsertWithWhereUniqueWithoutTranslateInput[] | null | undefined;
}
