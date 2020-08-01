import * as TypeGraphQL from "type-graphql";

export enum Role {
  ADMIN = "ADMIN",
  TEST = "TEST",
  STANDARD = "STANDARD",
  SUPER = "SUPER"
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
