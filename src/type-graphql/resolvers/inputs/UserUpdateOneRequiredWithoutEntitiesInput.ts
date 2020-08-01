import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { UserCreateWithoutEntitiesInput } from "../inputs/UserCreateWithoutEntitiesInput";
import { UserUpdateWithoutEntitiesDataInput } from "../inputs/UserUpdateWithoutEntitiesDataInput";
import { UserUpsertWithoutEntitiesInput } from "../inputs/UserUpsertWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneRequiredWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutEntitiesInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutEntitiesInput | null | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutEntitiesDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutEntitiesDataInput | null | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutEntitiesInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutEntitiesInput | null | undefined;
}
