import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PhraseCreateWithoutDisconnectEntitiesInput } from "../inputs/PhraseCreateWithoutDisconnectEntitiesInput";
import { PhraseScalarWhereInput } from "../inputs/PhraseScalarWhereInput";
import { PhraseUpdateManyWithWhereNestedInput } from "../inputs/PhraseUpdateManyWithWhereNestedInput";
import { PhraseUpdateWithWhereUniqueWithoutDisconnectEntitiesInput } from "../inputs/PhraseUpdateWithWhereUniqueWithoutDisconnectEntitiesInput";
import { PhraseUpsertWithWhereUniqueWithoutDisconnectEntitiesInput } from "../inputs/PhraseUpsertWithWhereUniqueWithoutDisconnectEntitiesInput";
import { PhraseWhereUniqueInput } from "../inputs/PhraseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PhraseUpdateManyWithoutDisconnectEntitiesInput {
  @TypeGraphQL.Field(_type => [PhraseCreateWithoutDisconnectEntitiesInput], {
    nullable: true,
    description: undefined
  })
  create?: PhraseCreateWithoutDisconnectEntitiesInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [PhraseUpdateWithWhereUniqueWithoutDisconnectEntitiesInput], {
    nullable: true,
    description: undefined
  })
  update?: PhraseUpdateWithWhereUniqueWithoutDisconnectEntitiesInput[] | null | undefined;

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

  @TypeGraphQL.Field(_type => [PhraseUpsertWithWhereUniqueWithoutDisconnectEntitiesInput], {
    nullable: true,
    description: undefined
  })
  upsert?: PhraseUpsertWithWhereUniqueWithoutDisconnectEntitiesInput[] | null | undefined;
}
