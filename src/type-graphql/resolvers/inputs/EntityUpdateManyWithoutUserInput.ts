import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutUserInput } from "../inputs/EntityCreateWithoutUserInput";
import { EntityScalarWhereInput } from "../inputs/EntityScalarWhereInput";
import { EntityUpdateManyWithWhereNestedInput } from "../inputs/EntityUpdateManyWithWhereNestedInput";
import { EntityUpdateWithWhereUniqueWithoutUserInput } from "../inputs/EntityUpdateWithWhereUniqueWithoutUserInput";
import { EntityUpsertWithWhereUniqueWithoutUserInput } from "../inputs/EntityUpsertWithWhereUniqueWithoutUserInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [EntityCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: EntityCreateWithoutUserInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [EntityUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  update?: EntityUpdateWithWhereUniqueWithoutUserInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [EntityUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  upsert?: EntityUpsertWithWhereUniqueWithoutUserInput[] | null | undefined;
}
