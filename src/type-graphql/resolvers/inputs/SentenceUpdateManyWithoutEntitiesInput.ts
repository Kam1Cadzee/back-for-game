import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SentenceCreateWithoutEntitiesInput } from "../inputs/SentenceCreateWithoutEntitiesInput";
import { SentenceScalarWhereInput } from "../inputs/SentenceScalarWhereInput";
import { SentenceUpdateManyWithWhereNestedInput } from "../inputs/SentenceUpdateManyWithWhereNestedInput";
import { SentenceUpdateWithWhereUniqueWithoutEntitiesInput } from "../inputs/SentenceUpdateWithWhereUniqueWithoutEntitiesInput";
import { SentenceUpsertWithWhereUniqueWithoutEntitiesInput } from "../inputs/SentenceUpsertWithWhereUniqueWithoutEntitiesInput";
import { SentenceWhereUniqueInput } from "../inputs/SentenceWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SentenceUpdateManyWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => [SentenceCreateWithoutEntitiesInput], {
    nullable: true,
    description: undefined
  })
  create?: SentenceCreateWithoutEntitiesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SentenceWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: SentenceWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: SentenceWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: SentenceWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceUpdateWithWhereUniqueWithoutEntitiesInput], {
    nullable: true,
    description: undefined
  })
  update?: SentenceUpdateWithWhereUniqueWithoutEntitiesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: SentenceUpdateManyWithWhereNestedInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: SentenceScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [SentenceUpsertWithWhereUniqueWithoutEntitiesInput], {
    nullable: true,
    description: undefined
  })
  upsert?: SentenceUpsertWithWhereUniqueWithoutEntitiesInput[] | null | undefined;
}
