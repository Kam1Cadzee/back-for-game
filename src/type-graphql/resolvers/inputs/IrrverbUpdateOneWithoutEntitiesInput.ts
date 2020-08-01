import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { IrrverbCreateWithoutEntitiesInput } from "../inputs/IrrverbCreateWithoutEntitiesInput";
import { IrrverbUpdateWithoutEntitiesDataInput } from "../inputs/IrrverbUpdateWithoutEntitiesDataInput";
import { IrrverbUpsertWithoutEntitiesInput } from "../inputs/IrrverbUpsertWithoutEntitiesInput";
import { IrrverbWhereUniqueInput } from "../inputs/IrrverbWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class IrrverbUpdateOneWithoutEntitiesInput {
  @TypeGraphQL.Field(_type => IrrverbCreateWithoutEntitiesInput, {
    nullable: true,
    description: undefined
  })
  create?: IrrverbCreateWithoutEntitiesInput | null | undefined;

  @TypeGraphQL.Field(_type => IrrverbWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: IrrverbWhereUniqueInput | null | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | null | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | null | undefined;

  @TypeGraphQL.Field(_type => IrrverbUpdateWithoutEntitiesDataInput, {
    nullable: true,
    description: undefined
  })
  update?: IrrverbUpdateWithoutEntitiesDataInput | null | undefined;

  @TypeGraphQL.Field(_type => IrrverbUpsertWithoutEntitiesInput, {
    nullable: true,
    description: undefined
  })
  upsert?: IrrverbUpsertWithoutEntitiesInput | null | undefined;
}
