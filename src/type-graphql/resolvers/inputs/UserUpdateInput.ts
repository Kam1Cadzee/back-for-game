import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityUpdateManyWithoutUserInput } from "../inputs/EntityUpdateManyWithoutUserInput";
import { WordUpdateManyWithoutUserInput } from "../inputs/WordUpdateManyWithoutUserInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateInput {

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  email?: string | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  lastName?: string | null | undefined;


  @TypeGraphQL.Field(_type => Role, {
    nullable: true,
    description: undefined
  })
  role?: keyof typeof Role | null | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  countQuery?: number | null | undefined;

  @TypeGraphQL.Field(_type => EntityUpdateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  entities?: EntityUpdateManyWithoutUserInput | null | undefined;

  @TypeGraphQL.Field(_type => WordUpdateManyWithoutUserInput, {
    nullable: true,
    description: undefined
  })
  Word?: WordUpdateManyWithoutUserInput | null | undefined;
}
