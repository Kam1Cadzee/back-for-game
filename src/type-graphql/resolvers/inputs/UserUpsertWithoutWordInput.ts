import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { UserCreateWithoutWordInput } from "../inputs/UserCreateWithoutWordInput";
import { UserUpdateWithoutWordDataInput } from "../inputs/UserUpdateWithoutWordDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutWordInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutWordDataInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutWordDataInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutWordInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutWordInput;
}
