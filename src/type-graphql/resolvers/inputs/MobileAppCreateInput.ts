import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StatusMobile } from "../../enums/StatusMobile";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MobileAppCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  version!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  url!: string;

  @TypeGraphQL.Field(_type => StatusMobile, {
    nullable: true,
    description: undefined
  })
  status?: keyof typeof StatusMobile | null | undefined;
}
