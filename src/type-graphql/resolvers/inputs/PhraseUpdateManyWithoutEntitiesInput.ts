import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PhraseCreateWithoutEntitiesInput } from "../inputs/PhraseCreateWithoutEntitiesInput";
import { PhraseScalarWhereInput } from "../inputs/PhraseScalarWhereInput";
import { PhraseUpdateManyWithWhereNestedInput } from "../inputs/PhraseUpdateManyWithWhereNestedInput";
import { PhraseUpdateWithWhereUniqueWithoutEntitiesInput } from "../inputs/PhraseUpdateWithWhereUniqueWithoutEntitiesInput";
import { PhraseUpsertWithWhereUniqueWithoutEntitiesInput } from "../inputs/PhraseUpsertWithWhereUniqueWithoutEntitiesInput";
import { PhraseWhereUniqueInput } from "../inputs/PhraseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PhraseUpdateManyWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => [PhraseCreateWithoutEntitiesInput], {
    nullable: true,
    description: undefined
  })
  create?: PhraseCreateWithoutEntitiesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [PhraseWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: PhraseWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [PhraseWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: PhraseWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [PhraseWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: PhraseWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [PhraseWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: PhraseWhereUniqueInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [PhraseUpdateWithWhereUniqueWithoutEntitiesInput], {
    nullable: true,
    description: undefined
  })
  update?: PhraseUpdateWithWhereUniqueWithoutEntitiesInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [PhraseUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: PhraseUpdateManyWithWhereNestedInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [PhraseScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: PhraseScalarWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [PhraseUpsertWithWhereUniqueWithoutEntitiesInput], {
    nullable: true,
    description: undefined
  })
  upsert?: PhraseUpsertWithWhereUniqueWithoutEntitiesInput[] | null | undefined;
}
