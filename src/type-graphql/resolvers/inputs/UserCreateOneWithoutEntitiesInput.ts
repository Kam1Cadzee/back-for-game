import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { UserCreateWithoutEntitiesInput } from "../inputs/UserCreateWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateOneWithoutEntitiesInput {
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
}
