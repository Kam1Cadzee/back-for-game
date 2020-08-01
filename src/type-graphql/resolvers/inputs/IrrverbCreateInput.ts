import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { EntityCreateManyWithoutIrrverbInput } from "../inputs/EntityCreateManyWithoutIrrverbInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class IrrverbCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  form1EN!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  form2EN!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  form3EN!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  ru!: string;

  @TypeGraphQL.Field(_type => EntityCreateManyWithoutIrrverbInput, {
    nullable: true,
    description: undefined
  })
  entities?: EntityCreateManyWithoutIrrverbInput | null | undefined;
}
