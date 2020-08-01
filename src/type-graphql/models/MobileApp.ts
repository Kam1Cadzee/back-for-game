import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StatusMobile } from "../enums/StatusMobile";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class MobileApp {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
    description: undefined,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  version!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  url!: string;

  @TypeGraphQL.Field(_type => StatusMobile, {
    nullable: false,
    description: undefined,
  })
  status!: keyof typeof StatusMobile;
}
