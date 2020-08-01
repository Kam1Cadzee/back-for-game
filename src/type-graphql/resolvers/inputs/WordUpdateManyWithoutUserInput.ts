import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordCreateWithoutUserInput } from "../inputs/WordCreateWithoutUserInput";
import { WordScalarWhereInput } from "../inputs/WordScalarWhereInput";
import { WordUpdateManyWithWhereNestedInput } from "../inputs/WordUpdateManyWithWhereNestedInput";
import { WordUpdateWithWhereUniqueWithoutUserInput } from "../inputs/WordUpdateWithWhereUniqueWithoutUserInput";
import { WordUpsertWithWhereUniqueWithoutUserInput } from "../inputs/WordUpsertWithWhereUniqueWithoutUserInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [WordCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: WordCreateWithoutUserInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [WordUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  update?: WordUpdateWithWhereUniqueWithoutUserInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [WordUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  upsert?: WordUpsertWithWhereUniqueWithoutUserInput[] | null | undefined;
}
