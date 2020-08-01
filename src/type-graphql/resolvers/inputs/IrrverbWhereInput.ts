import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityFilter } from "../inputs/EntityFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class IrrverbWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  form1EN?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  form2EN?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  form3EN?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  ru?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => EntityFilter, {
    nullable: true,
    description: undefined
  })
  entities?: EntityFilter | null | undefined;

  @TypeGraphQL.Field(_type => [IrrverbWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: IrrverbWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [IrrverbWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: IrrverbWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [IrrverbWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: IrrverbWhereInput[] | null | undefined;
}
