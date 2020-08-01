import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { UserCreateWithoutWordInput } from "../inputs/UserCreateWithoutWordInput";
import { UserUpdateWithoutWordDataInput } from "../inputs/UserUpdateWithoutWordDataInput";
import { UserUpsertWithoutWordInput } from "../inputs/UserUpsertWithoutWordInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneRequiredWithoutWordInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutWordInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutWordInput | null | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutWordDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutWordDataInput | null | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutWordInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutWordInput | null | undefined;
}
