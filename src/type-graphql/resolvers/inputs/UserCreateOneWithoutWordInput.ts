import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { UserCreateWithoutWordInput } from "../inputs/UserCreateWithoutWordInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateOneWithoutWordInput {
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
}
