import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AnotherUser_firstname_lastname_keyCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  en!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  userId!: number;
}
