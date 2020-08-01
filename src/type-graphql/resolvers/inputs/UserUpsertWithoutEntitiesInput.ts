import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { UserCreateWithoutEntitiesInput } from "../inputs/UserCreateWithoutEntitiesInput";
import { UserUpdateWithoutEntitiesDataInput } from "../inputs/UserUpdateWithoutEntitiesDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutEntitiesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutEntitiesDataInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutEntitiesInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutEntitiesInput;
}
