import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StatusMobileFilter } from "../inputs/StatusMobileFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MobileAppWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  version?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  url?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => StatusMobileFilter, {
    nullable: true,
    description: undefined
  })
  status?: StatusMobileFilter | null | undefined;

  @TypeGraphQL.Field(_type => [MobileAppWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: MobileAppWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [MobileAppWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: MobileAppWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [MobileAppWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: MobileAppWhereInput[] | null | undefined;
}
