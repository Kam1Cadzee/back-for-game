import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordCreateWithoutEntitiesInput } from "../inputs/WordCreateWithoutEntitiesInput";
import { WordScalarWhereInput } from "../inputs/WordScalarWhereInput";
import { WordUpdateManyWithWhereNestedInput } from "../inputs/WordUpdateManyWithWhereNestedInput";
import { WordUpdateWithWhereUniqueWithoutEntitiesInput } from "../inputs/WordUpdateWithWhereUniqueWithoutEntitiesInput";
import { WordUpsertWithWhereUniqueWithoutEntitiesInput } from "../inputs/WordUpsertWithWhereUniqueWithoutEntitiesInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpdateManyWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => [WordCreateWithoutEntitiesInput], {
    nullable: true,
    description: undefined
  })
  create?: WordCreateWithoutEntitiesInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [WordUpdateWithWhereUniqueWithoutEntitiesInput], {
    nullable: true,
    description: undefined
  })
  update?: WordUpdateWithWhereUniqueWithoutEntitiesInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [WordUpsertWithWhereUniqueWithoutEntitiesInput], {
    nullable: true,
    description: undefined
  })
  upsert?: WordUpsertWithWhereUniqueWithoutEntitiesInput[] | null | undefined;
}
