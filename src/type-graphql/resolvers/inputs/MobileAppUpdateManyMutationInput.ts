import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StatusMobile } from "../../enums/StatusMobile";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MobileAppUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  version?: string | null | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  url?: string | null | undefined;

  @TypeGraphQL.Field(_type => StatusMobile, {
    nullable: true,
    description: undefined
  })
  status?: keyof typeof StatusMobile | null | undefined;
}
