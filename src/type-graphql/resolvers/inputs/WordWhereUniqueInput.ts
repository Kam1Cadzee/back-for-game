import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AnotherUser_firstname_lastname_keyCompoundUniqueInput } from "../inputs/AnotherUser_firstname_lastname_keyCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class WordWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field(_type => AnotherUser_firstname_lastname_keyCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  AnotherUser_firstname_lastname_key?: AnotherUser_firstname_lastname_keyCompoundUniqueInput | null | undefined;
}
