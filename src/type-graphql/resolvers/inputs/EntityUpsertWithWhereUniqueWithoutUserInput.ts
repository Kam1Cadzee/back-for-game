import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateWithoutUserInput } from "../inputs/EntityCreateWithoutUserInput";
import { EntityUpdateWithoutUserDataInput } from "../inputs/EntityUpdateWithoutUserDataInput";
import { EntityWhereUniqueInput } from "../inputs/EntityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => EntityWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: EntityWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntityUpdateWithoutUserDataInput, {
    nullable: false,
    description: undefined
  })
  update!: EntityUpdateWithoutUserDataInput;

  @TypeGraphQL.Field(_type => EntityCreateWithoutUserInput, {
    nullable: false,
    description: undefined
  })
  create!: EntityCreateWithoutUserInput;
}
