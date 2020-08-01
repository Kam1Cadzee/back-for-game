import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Unique_title_userIdCompoundUniqueInput } from "../inputs/Unique_title_userIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EntityWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field(_type => Unique_title_userIdCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  unique_title_userId?: Unique_title_userIdCompoundUniqueInput | null | undefined;
}
