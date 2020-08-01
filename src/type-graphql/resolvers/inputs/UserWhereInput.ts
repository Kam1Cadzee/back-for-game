import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EntityFilter } from "../inputs/EntityFilter";
import { IntFilter } from "../inputs/IntFilter";
import { RoleFilter } from "../inputs/RoleFilter";
import { StringFilter } from "../inputs/StringFilter";
import { WordFilter } from "../inputs/WordFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserWhereInput {

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  email?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  lastName?: StringFilter | null | undefined;


  @TypeGraphQL.Field(_type => EntityFilter, {
    nullable: true,
    description: undefined
  })
  entities?: EntityFilter | null | undefined;

  @TypeGraphQL.Field(_type => RoleFilter, {
    nullable: true,
    description: undefined
  })
  role?: RoleFilter | null | undefined;

  @TypeGraphQL.Field(_type => WordFilter, {
    nullable: true,
    description: undefined
  })
  Word?: WordFilter | null | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  countQuery?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: UserWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: UserWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: UserWhereInput[] | null | undefined;
}
