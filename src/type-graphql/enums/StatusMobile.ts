import * as TypeGraphQL from "type-graphql";

export enum StatusMobile {
  WORK = "WORK",
  DEPRECATED = "DEPRECATED"
}
TypeGraphQL.registerEnumType(StatusMobile, {
  name: "StatusMobile",
  description: undefined,
});
