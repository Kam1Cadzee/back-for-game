import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StatusMobile } from "../../enums/StatusMobile";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class StatusMobileFilter {
  @TypeGraphQL.Field(_type => StatusMobile, {
    nullable: true,
    description: undefined
  })
  equals?: keyof typeof StatusMobile | null | undefined;

  @TypeGraphQL.Field(_type => StatusMobile, {
    nullable: true,
    description: undefined
  })
  not?: keyof typeof StatusMobile | null | undefined;

  @TypeGraphQL.Field(_type => [StatusMobile], {
    nullable: true,
    description: undefined
  })
  in?: Array<keyof typeof StatusMobile> | null | undefined;

  @TypeGraphQL.Field(_type => [StatusMobile], {
    nullable: true,
    description: undefined
  })
  notIn?: Array<keyof typeof StatusMobile> | null | undefined;
}
