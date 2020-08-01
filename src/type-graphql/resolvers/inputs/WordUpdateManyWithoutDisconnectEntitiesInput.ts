import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { WordCreateWithoutDisconnectEntitiesInput } from "../inputs/WordCreateWithoutDisconnectEntitiesInput";
import { WordScalarWhereInput } from "../inputs/WordScalarWhereInput";
import { WordUpdateManyWithWhereNestedInput } from "../inputs/WordUpdateManyWithWhereNestedInput";
import { WordUpdateWithWhereUniqueWithoutDisconnectEntitiesInput } from "../inputs/WordUpdateWithWhereUniqueWithoutDisconnectEntitiesInput";
import { WordUpsertWithWhereUniqueWithoutDisconnectEntitiesInput } from "../inputs/WordUpsertWithWhereUniqueWithoutDisconnectEntitiesInput";
import { WordWhereUniqueInput } from "../inputs/WordWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordUpdateManyWithoutDisconnectEntitiesInput {
  @TypeGraphQL.Field(_type => [WordCreateWithoutDisconnectEntitiesInput], {
    nullable: true,
    description: undefined
  })
  create?: WordCreateWithoutDisconnectEntitiesInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [WordUpdateWithWhereUniqueWithoutDisconnectEntitiesInput], {
    nullable: true,
    description: undefined
  })
  update?: WordUpdateWithWhereUniqueWithoutDisconnectEntitiesInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [WordUpsertWithWhereUniqueWithoutDisconnectEntitiesInput], {
    nullable: true,
    description: undefined
  })
  upsert?: WordUpsertWithWhereUniqueWithoutDisconnectEntitiesInput[] | null | undefined;
}
